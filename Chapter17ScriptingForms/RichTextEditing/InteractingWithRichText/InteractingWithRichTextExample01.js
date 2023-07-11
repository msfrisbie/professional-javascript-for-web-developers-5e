// toggle bold text in an iframe
frames["richedit"].document.execCommand("bold", false, null);

// toggle italic text in an iframe
frames["richedit"].document.execCommand("italic", false, null);

// create link to www.wroxwiley.com in an iframe
frames["richedit"].document.execCommand("createlink", false,
                                        "http://www.wileywrox.com");

// format as first-level heading in an iframe
frames["richedit"].document.execCommand("formatblock", false, "<h1>");
