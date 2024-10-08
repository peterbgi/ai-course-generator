import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-200">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Tanuj egyszerűen
          <strong className="font-extrabold text-primary sm:block"> Gyors Megoldás </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
          A mindennapokban az idő az igazi érték ebben akarunk segíteni, engedd hogy az AI időt sporoljon neked
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            Kurzus Generálás
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
