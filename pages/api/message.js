

export default async function handler(req, res) {
    const products = req.body.items

    const adress = req.body.data.adress
    const phone = req.body.data.phoneNumber
    const name = req.body.data.firstName
    const payAproach = req.body.payaproach
    let time = req.body.time
    let exactTime = req.body.data.time
    if(time == 'Ко времени') time = "Ко времени" + " " + exactTime
    const place = req.body.place
    const totalprice = req.body.totalPrice
    const newFormat = Object.values(products).map(elem => elem.title + "x" + elem.count + " " + elem.price * elem.count + "Р").join(`%0A `)
    console.log(newFormat)
    if(req.body.data.Comment.length > 0){
        const a = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=-1001158901870&text=Заказ:%0A----------------------%0A ${newFormat}%0A----------------------%0AИмя: ${name}%0AНомер телефона: ${phone}%0AАдресс: ${adress}%0AМесто: ${place}%0AМетод оплаты: ${payAproach}%0AВремя: ${time}%0AКомментарий для курьера: ${req.body.data.Comment}%0AОбщая цена: ${totalprice} Р`)
        res.status(200).json({message: a.ok})
    }
    if(req.body.data.Comment.length == 0){
        const a = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=-1001158901870&text=Заказ:%0A----------------------%0A ${newFormat}%0A----------------------%0AИмя: ${name}%0AНомер телефона: ${phone}%0AАдресс: ${adress}%0AМесто: ${place}%0AМетод оплаты: ${payAproach}%0AВремя: ${time}%0AОбщая цена: ${totalprice} Р`)
        res.status(200).json({message: a.ok})
    }


}
