import { useEffect, useRef, useState } from 'react'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { db } from '../firebase'
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore'

function Comunidad() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [uid, setUid] = useState('')
    const [cargando, setCargando] = useState(true)

    const [nuevoNombre, setNuevoNombre] = useState('')
    const [nuevaFoto, setNuevaFoto] = useState('')

    const [contenidoPost, setContenidoPost] = useState('')
    const [posts, setPosts] = useState([])

    const [editandoID, setEditandoID] = useState(null)
    const [nuevoContenido, setNuevoContenido] = useState('')

    const [comentariosPorPost, setComentariosPorPost] = useState({})
    const [inputComentarioPorPost, setInputComentarioPorPost] = useState({})

    const auth = getAuth()
    const comentariosUnsubsRef = useRef({})

    const formatearFecha = (fecha) => {
        if (!fecha) return ''
        if (fecha.toDate) fecha = fecha.toDate()
        return fecha.toLocaleDateString('es-PE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
                setEmail(user.email)
                setNombre(user.displayName || 'Usuario sin nombre')
                setFoto(user.photoURL || '/user.webp')
                setNuevoNombre(user.displayName || '')
                setNuevaFoto(user.photoURL || '')
            } else {
                setUid('')
                setEmail('')
                setNombre('')
                setFoto('')
            }
            setCargando(false)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
            setPosts(lista)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        posts.forEach((p) => {
            if (comentariosUnsubsRef.current[p.id]) return

            const q = query(
                collection(db, 'posts', p.id, 'comentarios'),
                orderBy('fecha', 'asc'),
            )
            const unsub = onSnapshot(q, (snap) => {
                const lista = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
                setComentariosPorPost((prev) => ({ ...prev, [p.id]: lista }))
            })

            comentariosUnsubsRef.current[p.id] = unsub
        })

        return () => {
            Object.values(comentariosUnsubsRef.current).forEach((u) => u())
        }
    }, [posts])

    const actualizarPerfil = async () => {
        const user = auth.currentUser
        if (!user) return alert('No hay un usuario activo')

        try {
            await updateProfile(user, {
                displayName: nuevoNombre || user.displayName,
                photoURL: nuevaFoto || user.photoURL,
            })

            alert('Perfil actualizado')
            setNombre(nuevoNombre || user.displayName)
            setFoto(nuevaFoto || user.photoURL)
        } catch (err) {
            console.error(err)
            alert('Error: ' + err.message)
        }
    }

    const crearPost = async () => {
        if (contenidoPost.trim() === '') return
        await addDoc(collection(db, 'posts'), {
            contenido: contenidoPost,
            fecha: serverTimestamp(),
            autor: nombre,
            autorFoto: foto,
            autorUid: uid,
            likes: [],
        })
        setContenidoPost('')
    }

    const toggleLike = async (post) => {
        const ref = doc(db, 'posts', post.id)
        const actuales = post.likes || []
        const nuevos = actuales.includes(uid)
            ? actuales.filter((id) => id !== uid)
            : [...actuales, uid]
        await updateDoc(ref, { likes: nuevos })
    }

    const guardarEdicion = async (id) => {
        await updateDoc(doc(db, 'posts', id), { contenido: nuevoContenido })
        setEditandoID(null)
    }

    const eliminarPost = async (id) => {
        if (!confirm('¿Eliminar este post?')) return
        await deleteDoc(doc(db, 'posts', id))
    }

    const agregarComentario = async (postId) => {
        const texto = (inputComentarioPorPost[postId] || '').trim()
        if (!texto) return

        await addDoc(collection(db, 'posts', postId, 'comentarios'), {
            texto,
            autor: nombre,
            autorFoto: foto,
            autorUid: uid,
            fecha: serverTimestamp(),
        })

        setInputComentarioPorPost((prev) => ({ ...prev, [postId]: '' }))
    }

    const editarComentario = async (postId, comentario) => {
        const nuevoTexto = prompt('Editar comentario:', comentario.texto)
        if (!nuevoTexto || nuevoTexto.trim() === '') return

        await updateDoc(
            doc(db, 'posts', postId, 'comentarios', comentario.id),
            { texto: nuevoTexto }
        )
    }

    const eliminarComentario = async (postId, comentario) => {
        if (!confirm('¿Eliminar comentario?')) return

        await deleteDoc(doc(db, 'posts', postId, 'comentarios', comentario.id))
    }

    if (cargando) return <p className="text-center mt-10">Cargando...</p>

    return (
        <div className="w-full max-w-5xl mx-auto p-4">

            {/* Perfil */}
            <div className="bg-white shadow-md rounded-xl p-6 mb-8 text-center">
                <img
                    src={foto || "/holademonio.jpg"}
                    alt="foto"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h1 className="text-2xl font-bold text-gray-800">Bienvenido a la comunidad</h1>
                <p className="mt-1 text-gray-600">
                    Hola, <strong>{nombre}</strong>
                </p>
                <p className="text-gray-500">{email}</p>
            </div>

            {/* Editar perfil */}
            <div className="bg-white shadow-md rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Editar mis datos</h2>

                <input
                    type="text"
                    placeholder="Nuevo nombre"
                    className="w-full p-2 mb-3 border rounded-lg focus:outline-gray-400"
                    value={nuevoNombre}
                    onChange={(e) => setNuevoNombre(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="URL nueva foto"
                    className="w-full p-2 mb-3 border rounded-lg focus:outline-gray-400"
                    value={nuevaFoto}
                    onChange={(e) => setNuevaFoto(e.target.value)}
                />

                <button
                    onClick={actualizarPerfil}
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                    Guardar cambios
                </button>
            </div>

            {/* Crear publicación */}
            <div className="bg-white shadow-md rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Crear publicación</h2>

                <textarea
                    placeholder="¿Qué estás pensando?"
                    className="w-full p-3 border rounded-lg mb-4 focus:outline-gray-400"
                    value={contenidoPost}
                    onChange={(e) => setContenidoPost(e.target.value)}
                />

                <button
                    onClick={crearPost}
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                    Publicar
                </button>
            </div>

            {/* Publicaciones */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Publicaciones</h2>

            <div className="space-y-6">
                {posts.map((post) => {
                    const comentarios = comentariosPorPost[post.id] || []

                    return (
                        <div key={post.id} className="bg-white shadow-md rounded-xl p-6">

                            {/* Header autor */}
                            <div className="flex items-center gap-4 mb-4 bg-gray-100 p-4 rounded-2xl border border-gray-300 shadow-sm">
                                <img
                                    src={post.autorFoto ? post.autorFoto : "/default-avatar.png"}
                                    alt="Foto del autor"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-400 shadow-md"
                                />

                                <div>
                                    <p className="font-semibold text-gray-800">{post.autor}</p>
                                    <p className="text-gray-500 text-sm">{formatearFecha(post.fecha)}</p>
                                </div>
                            </div>

                            {/* Contenido */}
                            {editandoID === post.id ? (
                                <>
                                    <textarea
                                        className="w-full p-3 border rounded-lg mb-3"
                                        value={nuevoContenido}
                                        onChange={(e) => setNuevoContenido(e.target.value)}
                                    />
                                    <button
                                        onClick={() => guardarEdicion(post.id)}
                                        className="bg-gray-700 text-white px-3 py-1 rounded-lg mr-2"
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        onClick={() => setEditandoID(null)}
                                        className="bg-gray-400 text-white px-3 py-1 rounded-lg"
                                    >
                                        Cancelar
                                    </button>
                                </>
                            ) : (
                                <p className="mb-4">{post.contenido}</p>
                            )}

                            {/* Botones */}
                            <div className="flex gap-3 mb-4">
                                <button
                                    onClick={() => toggleLike(post)}
                                    className="text-gray-700 font-semibold"
                                >
                                    ❤️ {post.likes?.length || 0}
                                </button>

                                {post.autorUid === uid && (
                                    <>
                                        <button
                                            onClick={() => {
                                                setEditandoID(post.id)
                                                setNuevoContenido(post.contenido)
                                            }}
                                            className="text-blue-500 font-semibold"
                                        >
                                            Editar
                                        </button>

                                        <button
                                            onClick={() => eliminarPost(post.id)}
                                            className="text-red-500 font-semibold"
                                        >
                                            Eliminar
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Comentarios */}
                            <div className="border-t pt-4">
                                <h4 className="font-bold mb-3 text-gray-800">
                                    Comentarios ({comentarios.length})
                                </h4>

                                {comentarios.map((c) => (
                                    <div key={c.id} className="mb-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <img
                                                src={c.autorFoto}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <p className="font-semibold text-sm text-gray-800">{c.autor}</p>
                                            <p className="text-gray-500 text-xs">{formatearFecha(c.fecha)}</p>
                                        </div>

                                        <p className="ml-10 mb-1 text-gray-700">{c.texto}</p>

                                        {c.autorUid === uid && (
                                            <div className="ml-10 flex gap-3 text-sm">
                                                <button
                                                    onClick={() => editarComentario(post.id, c)}
                                                    className="text-blue-500"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() => eliminarComentario(post.id, c)}
                                                    className="text-red-500"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Agregar comentario */}
                                <textarea
                                    placeholder="Escribe un comentario..."
                                    className="w-full p-2 border rounded-lg mt-3 mb-2 focus:outline-gray-400"
                                    value={inputComentarioPorPost[post.id] || ''}
                                    onChange={(e) =>
                                        setInputComentarioPorPost((prev) => ({
                                            ...prev,
                                            [post.id]: e.target.value,
                                        }))
                                    }
                                />

                                <button
                                    onClick={() => agregarComentario(post.id)}
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded-lg"
                                >
                                    Comentar
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Comunidad

