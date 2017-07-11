const defaultStyles = {
    block: {
        marginBottom: 10,
    },
    textBlock: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    h1: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 8
    },
    h2: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8
    },
    h3: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8
    },
    h4: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8
    },
    h5: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 6
    },
    h6: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 6
    },
    text: {
        alignSelf: 'flex-start'
    },
    strong: {
        fontWeight: 'bold',
    },
    em: {
        fontStyle: 'italic',
    },
    del: {
        textDecorationLine: 'line-through',
    },
    linkWrapper: {
        alignSelf: 'flex-start',
    },
    link: {
        textDecorationLine: 'underline',
        alignSelf: 'flex-start'
    },
    list: {
        marginBottom: 20
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    listItemContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    listItemTextContent: {

    },
    listItemBullet: {
        width: 4,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 2,
        marginRight: 10,
    },
    listItemNumber: {
        marginRight: 10
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    image: {
        flex: 1,
        minWidth: 200,
        height: 200
    },
    blockQuote: {
        backgroundColor: '#dddddd',
        borderLeftWidth: 2,
        borderLeftColor: 'black',
        paddingLeft: 10
    }
};

module.exports = defaultStyles;