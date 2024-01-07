import { ArrowOutward } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen text-white py-[4%] px-[8%]'>
      <p className="lg:text-3xl font-bold">
        Some of my favorite projects.
      </p>
      <div className="grid lg:grid-cols-2 gap-10 py-10">
        <div className="flex flex-col gap-3">
          <Image height={600} width={800} src="/Eduvilla.webp" alt="" className="rounded" />

          <p className="text-xl font-bold">
            Edu-Villa: An Online Learning App
          </p>
          <p className="cursor-pointer text-primary font-bold text-lg">
            See Project <ArrowOutward />
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Image height={600} width={800} src="/crazzyhub.webp" alt="" className="rounded" />
          <p className="text-xl font-bold">Crazzyhub: An Ecommerce Web App</p>
          <p className="cursor-pointer text-primary font-bold text-lg">
            See Project <ArrowOutward />
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Image height={600} width={800} src="/erpv2.webp" alt="" className="rounded" />
          <p className="text-xl font-bold">Bhaarat ERP: An ERP Web App</p>
          <p className="cursor-pointer text-primary font-bold text-lg">
            See Project <ArrowOutward />
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Image height={600} width={800} src="/pos.webp" alt="" className="rounded" />
          <p className="text-xl font-bold">Point Of Sale </p>
          <p className="cursor-pointer text-primary font-bold text-lg">
            See Project <ArrowOutward />
          </p>
        </div>
      </div>
    </div>
  )
}
