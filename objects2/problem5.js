function mapSymbols(N) {
    // Write code here
    var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
    for (i=0;i<symbols.length;i++) {
    console.log(symbols[i]+"-"+N);
    N=N+2;
  }
}
