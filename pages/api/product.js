import fetchData from "../../helpers/fetchData";

const handler = async (req, res) => {
    try {
        const id = req.query.q
        const [response, descResponse] = await Promise.all([fetchData(`https://api.mercadolibre.com/items/${id}`), fetchData(`https://api.mercadolibre.com/items/${id}/description`)])
        res.status(200).json({
            author: { name: "Santiago", lastname: "Mejia Jervis" },
            item: {
                id: response.id,
                title: response.title,
                price: {
                    currency: response.currency_id,
                    amount: response.price
                },
                picture: response.pictures[0].url,
                condition: response.condition,
                free_shipping: response.shipping.free_shipping,
                sold_quantity: response.sold_quantity,
                description: descResponse.plain_text,
                category: response.category_id
            },
        })
    } catch (error) {
        res.status(401).end(error.message)
    }
}

export default handler