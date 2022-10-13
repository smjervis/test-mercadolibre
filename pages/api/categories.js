import fetchData from "../../helpers/fetchData";

const handler = async (req, res) => {
    try {
        const id = req.query.id

        const response = await fetchData(`https://api.mercadolibre.com/categories/${id}`)
        res.status(200).json({
            author: { name: "Santiago", lastname: "Mejia Jervis" },
            category_name: response.name,
            link: response.permalink
        })
    } catch (error) {
        res.status(401).end(error.message)
    }
}

export default handler