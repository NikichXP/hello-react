import {getHeaders, transformStatusData} from "../statusUtils";

const data = {
    "metrics": {
        "events": {
            "intensity": {
                "a": 1,
                "b": 2,
                "c": 3,
                "d": 4
            },
            "recent": {
                "a": 10,
                "b": 20,
                "c": 30,
                "d": 40
            },
            "total": {
                "a": 100,
                "b": 200,
                "c": 300,
                "d": 400
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


