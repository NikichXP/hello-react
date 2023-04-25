import {getHeaders, transformStatusData} from "../statusUtils";

const data = {
    "metrics": {
        "events": {
            "recent": {
                "a": 0,
                "b": 15,
                "c": 25,
                "d": 20
            },
            "total": {
                "a": 100,
                "b": 1500,
                "c": 2500,
                "d": 2000
            }
        },
        "intensity": {
            "total": {
                "a": 0.0,
                "b": 11.1,
                "c": 11.2,
                "d": 5.0
            },
            "recent": {
                "a": 0.0,
                "b": 11.0,
                "c": 11.5,
                "d": 5.5
            }
        }
    }
}

test('status processor: headers', () => {
    let result = getHeaders(data)
    expect(result).toContain('recent')
    expect(result).toContain('total')
    expect(result).toContain('intensity')
})

test('status processor: content', () => {
    let result = transformStatusData(data)
    expect(result).toStrictEqual([
        [ 'a', 1, 10, 100 ],
        [ 'b', 2, 20, 200 ],
        [ 'c', 3, 30, 300 ],
        [ 'd', 4, 40, 400 ]
    ])
})


