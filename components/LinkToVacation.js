import Link from "next/link";

export default function LinkToVacation(){
    return( <li className="text-[18px] py-2 cursor-pointer hover:underline"><Link href="/vacation">

                                                    <span
                                                        className="text-[18px] py-2 cursor-pointer hover:underline">Вакансии</span>

    </Link></li>)
}