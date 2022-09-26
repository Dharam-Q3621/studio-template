function showMore( n ) {
    if ( n === 1 ) {
        var moreText = document.getElementById( "moreText" );
        var dots = document.getElementById( "dots" );

        if ( moreText.style.display === "inline" ) {
            moreText.style.display = "none";
            dots.style.display = "inline";
        }
        else {
            moreText.style.display = "inline";
            dots.style.display = "none";
        }
    }
    else {
        var moreText = document.getElementById( "moreText2" );
        var dots = document.getElementById( "dots2" );

        if ( moreText.style.display === "inline" ) {
            moreText.style.display = "none";
            dots.style.display = "inline";
        }
        else {
            moreText.style.display = "inline";
            dots.style.display = "none";
        }
    }

}