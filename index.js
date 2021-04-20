const relacao1 = [[0.6,0.9],[0.8,0.4]];
const relacao2 = [[0.5, 0.9],[0.8, 0.5]];
relacao3 = multiply(relacao1, relacao2);
console.log(relacao3);
function multiply(a, b) {
    var rel1Rows = relacao1.length;
    var rel1Cols = relacao1[0].length;
    var rel2Cols = relacao2[0].length;
    m = new Array(rel1Rows);
    for (var r = 0; r < rel1Rows; ++r) {
      m[r] = new Array(rel2Cols);
      for (var c = 0; c < rel2Cols; ++c) {
        m[r][c] = 0;
        for (var i = 0; i < rel1Cols; ++i) {
            if(a[r][i] <= b[i][c]){
                if(a[r][i]>=m[r][c]){
                    m[r][c] = a[r][i];
                }
            }
            if(b[i][c] <= a[r][i]){
                if(b[i][c]>=m[r][c]){
                    m[r][c] = b[i][c];
                }
            }
            console.log('m:' + m[r][c]);
        }
      }
    }


    
    return m;
  }