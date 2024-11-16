const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        for (let item of array) {
            if (typeof item !== 'string') {
                reject('Untuk Make All Caps Object pada array harus string')
                return
            }
        }

        const resultCaps = array.map((item) => {
            return item.toUpperCase();
        })

        resolve(resultCaps);
    })
}

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        for (let item of array) {
            if (typeof item !== 'string') {
                reject('Untuk Sort Words object pada array harus string')
                return
            }
        }

        const resultSort = array.sort()
        resolve(resultSort)
    })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })