

export default function Card(props){
    return(
        <div className="w-full">
        <div className="w-4/5 flex justify-center p-6 my-4 border-b-[1px] ml-auto mr-auto">
            <div className=" w-1/3 h-auto px-8">
            <img className="object-cover h-full rounded" src={props.imageUrl} alt=""/>
            </div>
            <div className="w-1/2">
                <small className="capitalize">{props.location} <a className="ml-6 text-gray-500 not-italic underline hover:no-underline" href={props.googleMapsUrl}>View on Google maps</a></small>
                <h2 className="text-4xl pb-4">{props.title}</h2>
                <p className="font-bold text-sm pb-2">{props.startDate}-{props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
        </div>
    )
}