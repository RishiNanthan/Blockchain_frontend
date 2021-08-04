
const serverAddress = "http://localhost:8000";
const settings = {
    mode: "cors",
    method: "POST",
};

const generateKeys = async () => {
    return fetch(serverAddress + "/create_address", settings)
    .then(
        res => {
            return res.json();
        }
    ).catch(err => {
        console.log(err);
    });
};

const findDocumentHash = async (document) => {
    return fetch(serverAddress + "/find_document_hash", {
        ...settings,
        body: document,
    }).then(
        res => {
            return res.json()
        }
    );
}

const findHash = async (data) => {
    return fetch(serverAddress + "/find_hash?", {
        ...settings,
        body: {
            data: data,
        }
    }).then(
        res => {
            return res.json();
        }
    )
}


const getTransaction = (publicKey) => {
    return fetch(`${serverAddress}/get_client_transactions?public_key=${publicKey}`, {
        ...settings,
    }).then( res => {
        return res.json();
    });
}

const getTransactionHistory = (publicKey) => {
    return fetch(`${serverAddress}/get_client_transactions?public_key=${publicKey}`, {
        ...settings,
    }).then( res => {
        return res.json();
    });
}

const getBlock = (blockID) => {
    return fetch(`${serverAddress}/get_block?block_id=${blockID}`, {
        ...settings,
    }).then(res => {
        return res.json();
    })
}

export { generateKeys, findHash, findDocumentHash, getTransactionHistory, getBlock, getTransaction }