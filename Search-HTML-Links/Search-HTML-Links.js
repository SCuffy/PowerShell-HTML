const locales = /(ar\-sa)|(bg\-bg)|(bs\-latn\-ba)|(ca\-es)|(cs\-cz)|(da\-dk)|(de\-at)|(de\-ch)|(de\-de)|(el\-gr)|(en\-au)|(en\-ca)|(en\-gb)|(en\-ie)|(en\-in)|(en\-my)|(en\-nz)|(en\-sg)|(en\-us)|(en\-za)|(en\-es)|(es\-es)|(es\-mx)|(et\-ee)|(fi\-fi)|(fr\-be)|(fr\-ca)|(fr\-ch)|(fr\-fr)|(he\-il)|(hi\-in)|(hr\-hr)|(hu\-hu)|(id\-id)|(is\-is)|(it\-ch)|(it\-it)|(ja\-jp)|(ko\-kr)|(lt\-lt)|(lv\-lv)|(nb\-no)|(nl\-be)|(nl\-nl)|(pl\-pl)|(pt\-br)|(pt\-pt)|(ro\-ro)|(ru\-ru)|(sk\-sk)|(sl\-si)|(sr\-cyrl\-rs)|(sv\-se)|(th\-th)|(tr\-tr)|(vi\-vn)|(zh\-cn)|(zh\-hk)|(zh\-tw)/ig;
const links = document.querySelectorAll('.lia-quilt-row-main a');
for (const link of links) {
  if (locales.test(link.href)) {
    console.log(`${link.innerHTML} -> ${link.href}`);
  }
}
