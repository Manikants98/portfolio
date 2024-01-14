import Image from "next/image";

export default function Page() {
  return (
    <section className="dark:bg-secondary bg-[#f3f4f6] text-gray-900 dark:text-gray-100">
      <div className="py-[5%] px-3 lg:px-[9%] mx-auto space-y-6">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto rounded sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-black bg-white">
          <Image height={600} width={800} src="/erpv2.webp" alt="" className="object-cover rounded-tl rounded-tr lg:rounded-tr-none lg:rounded-bl w-full lg:col-span-7 dark:bg-gray-500" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Bhaarat ERP: An ERP Web App</h3>
            <span className="text-xs dark:text-gray-400">January 19, 2022</span>
            <p>Crafted for my portfolio, this project showcases my expertise in Tailwind CSS, ReactJS, and Material UI, featuring seamless integration of WhatsApp SDK API. The web app offers an intuitive user interface with responsive design, emphasizing a modern and user-friendly experience. Leveraging the power of Tailwind for styling, ReactJS for dynamic functionality, and Material UI for enhanced components, this project demonstrates my skills in front-end development.</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline dark:bg-black bg-white">
            <Image height={360} width={420} alt="" role="presentation" className="object-cover rounded-t w-full dark:bg-gray-500" src="/Eduvilla.webp" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"> Edu-Villa: An Online Learning App</h3>
              <span className="text-xs dark:text-gray-400">January 21, 2021</span>
              <p>My portfolio features a standout project - a dynamic app crafted with Tailwind CSS, ReactJS, Material UI, React-Query, and Formik. This fusion delivers a seamless, responsive, and visually appealing user experience, showcasing my prowess in front-end development and innovative tech integration.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline dark:bg-black bg-white">
            <Image height={360} width={420} alt="" role="presentation" className="object-cover w-full rounded-t dark:bg-gray-500" src="/crazzyhub.webp" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Crazzyhub: An Ecommerce Web App</h3>
              <span className="text-xs dark:text-gray-400">January 21, 2021</span>
              <p>Crazzyhub: Elevate your shopping experience with this cutting-edge ecommerce web app. Crafted using ReactJS, Tailwind CSS, Material UI, React-Query, and Formik, it seamlessly combines style and functionality. Witness the fusion of technology and design, showcasing my prowess in delivering efficient and captivating ecommerce solutions.</p>
            </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline dark:bg-black bg-white">
            <Image height={360} width={420} alt="" role="presentation" className="object-cover w-full rounded-t dark:bg-gray-500" src="/pos.webp" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Point Of Sale </h3>
              <span className="text-xs dark:text-gray-400">January 21, 2021</span>
              <p>
                Experience seamless transactions with my Point of Sale (POS) ReactJS website. Infused with modern design, it epitomizes efficiency using Tailwind CSS, Material UI, React-Query, and Formik. This project reflects my expertise in creating sleek, user-centric applications that prioritize both aesthetics and functionality.</p>
            </div>
          </a>

        </div>

      </div>
    </section>
  )
}
