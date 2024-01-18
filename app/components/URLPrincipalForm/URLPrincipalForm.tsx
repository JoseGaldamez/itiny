'use client';

export const URLPrincipalForm = () => {

    const handleClickAcortar = () => {
        alert("Hola mundo");
    }

    return (
        <div className="grid justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Escribe aquí tu URL</h2>
                        <p className="mt-4 text-lg text-center leading-8 text-gray-300">
                            Pega aquí la URL que quieres recortar, luego da click en el botón o presiona ENTER en tu teclado.
                        </p>
                        <div className="mt-6 flex flex-1 gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                URL
                            </label>
                            <input
                                id="email-address"
                                name="text"
                                type="url"
                                required
                                className="flex-1 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white sm:text-sm sm:leading-6"
                                placeholder="https://misitiowebempres.com/blog/articulo-largo"
                            />
                            <button
                                onClick={handleClickAcortar}
                                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Acortar
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

