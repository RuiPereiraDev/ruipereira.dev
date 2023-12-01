import {ofetch} from 'ofetch'

export const apiFetch = ofetch.create({
    headers: {
        'User-Agent': 'ruipereira.dev'
    }
})
