import { getAllServices } from "../_data-access/get-all-services";

interface ServicesContentProps{
    userId: string;
}

export async function ServicesContent({userId} : ServicesContentProps){
    
    const services = await getAllServices({ userId })
    return(
        <div>
            <h1>teste</h1>
        </div>
    )
}