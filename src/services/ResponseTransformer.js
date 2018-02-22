class ResponseTransformer {
    static transformResponse(data) {
        let newData = [];

        // map id values
        for (let key in data) {
            data[key].id = key;
            newData.push(data[key]);
        }

        return newData;
    }
}

export default ResponseTransformer;