const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initApp = async () => {
    // useForEach(ids)
    getPostsSerialized(ids)
}

document.addEventListener('DOMContentLoaded', initApp)

const getPost = async (id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
}

const getPostsSerialized = async (ids) => {
    await ids.reduce(async (acc, id) => {
        // wait for the previous item to complete
        await acc;
        // get the next item
        const post = await getPost(id)
        console.log(post)
    }, Promise.resolve())
    console.log("I'll wait on you")
}

const useForEach = (ids) => {
    ids.forEach(id => console.log(id))
}