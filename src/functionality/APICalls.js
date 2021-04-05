
const generateKeys = async () => {
    return fetch("/create_address")
    .then(
        res => {
            return res.json();
        }
    );
};

const findHash = async (document) => {
    return fetch("/find_hash", {
        body: document,
    }).then(
        res => {
            return res.json()
        }
    );
}


export {generateKeys, findHash}