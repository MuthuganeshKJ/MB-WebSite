
const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-between padding margin bg-services font-redressed text-text-blue">

        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 w-full">

        <div className="lg:hidden md:hidden flex justify-center h-10 w-fulltext-center rounded-[20px] text-3xl items-center text-coral-red">OUR SERVICES</div>
       
        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Offset Printing</div>
        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Digital Printing</div>
        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Screen Printing</div>

        </div>
        
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-full">

        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Book Printing</div>
        
        <div className="max-sm:hidden flex justify-center h-10 w-full text-center rounded-[20px] text-4xl items-center text-coral-red">OUR SERVICES</div>
       
        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Calender Printing</div>

        </div>

        

        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 w-full">

        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Binding</div>
        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Paper Bags</div>
        <div className="flex justify-center h-10 w-full  text-center text-3xl items-center">Designing</div>

        </div>

    </div>
  )
}

export default Hero