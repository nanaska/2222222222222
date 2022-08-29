import Link from "next/link";

export default function DeliveryZone(){
    return( <div className="dropdown dropdown-hover">
        <Link href="/delivery"><a className="btn btn-outline m-1">Зона доставки</a></Link>

    </div>)
}