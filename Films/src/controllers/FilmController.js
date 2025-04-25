import { sendMessage } from "../lib/rabbitmq.js";





export const index = async (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Films API!',
        status: 'success',
    });
}


export const store = async (req, res) => {
    const { title, description, releaseDate } = req.body;
    const new_film = {
        title,
        description,
        releaseDate,
        "project": new Date(new Date(releaseDate).getTime() + 3 * 24 * 60 * 60 * 1000)
    };

    // Send the new film to RabbitMQ
    await sendMessage(new_film);

    res.status(201).json({
        message: 'Film created successfully!',
        status: 'success',
        data: new_film,
    });

}



export const show = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Showing film with ID: ${id}`,
        status: 'success',
    });
}


export const update = async (req, res) => {
    const { id } = req.params;
    const { title, description, releaseDate } = req.body;
    res.status(200).json({
        message: `Updating film with ID: ${id}`,
        status: 'success',
    });
}


export const destroy = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Deleting film with ID: ${id}`,
        status: 'success',
    });
}
