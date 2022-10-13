import fetchData from "../../helpers/fetchData";

const handler = async (req, res) => {
    try {
        const search = req.query.q
        const response = await fetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`)
        res.status(200).json({
            author: { name: "Santiago", lastname: "Mejia Jervis" },
            categories:
                response.filters[0] ? response.filters[0].values.map(category => {
                    return {
                        categoriesPath: category.path_from_root
                    }
                }) : [{ categoriesPath: [search] }],
            items: response.results.map(result => {
                return {
                    id: result.id,
                    title: result.title,
                    price: {
                        currency: result.currency_id,
                        amount: result.price
                    },
                    picture: result.thumbnail,
                    condition: result.condition,
                    free_shipping: result.shipping.free_shipping,
                    address: result.address.state_name
                }
            }),
            total_results: response.paging.total,
        })
    } catch (error) {
        res.status(401).end(error.message)
    }
}

export default handler

