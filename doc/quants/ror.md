### ror
Simple rate of return


#### Description

Simple rate of return calculated from the last and the first value ofan array of numbers.


|Params|Type|Description
|---------|----|-----------
|`x` | array!matrix | array or matrix of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var q = [[89,23,12],[34,5,70]];

ubique.ror([100,112])); //  0.12
ubique.ror(q); // [[-0.617978, -0.782609, 4.83333]]
ubique.ror(q,0); // [-0.865169, 1.05882]
```
