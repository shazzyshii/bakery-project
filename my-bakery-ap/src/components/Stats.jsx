function Stats () {
    return (
        <div>
            <div className="flex flex-col items-center py-4">
                <h2 className="text-3xl font-bold font-serif text-center">
                Our Impact in Numbers
                </h2>
            </div>
            <div className="grid grid-cols-1 p-8 rounded-4xl bg-amber-100 divide-y divide-black md:divide-y-0 md:divide-x md:divide-black md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center py-4">
            <p className="text-3xl font-bold text-amber-600">150+</p>
            <h3 className="font-semibold text-orange-950">Daily Customers</h3>
            <p className="mt-2 text-amber-600 text-sm sm:text-base">Happy visitors each day</p>
            
        </div>
        
        <div className="flex flex-col items-center py-4">
            <p className="text-3xl font-bold text-amber-600">285+</p>
            <h3 className="text-orange-950 font-semibold">Products Daily</h3>
            <p className="mt-2 text-amber-600 text-sm sm:text-base">Fresh items sold</p>
            
        </div>
        {/* Stats 3 - */}
        <div className="flex flex-col items-center py-4">
            <p className="text-3xl font-bold text-amber-600">98.5%</p>
            <h3 className="mt-2 font-semibold sm:text-base">Satisfaction</h3>
        </div>
        {/* Stats 4 - Years Operating */}
        <div className="flex flex-col items-center py-4">
            
            <p className="text-3xl font-bold text-amber-600">13</p>
            <h3 className=" text-orange-950 font-semibold">Years</h3>
            <p className="mt-2 text-amber-600 text-sm sm:text-base">of baking excellence</p>
            </div>
        </div>
        </div>
    );
}
export default Stats;