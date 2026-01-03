// Channel Configuration
const channels = [
  // Keep all your channel objects here
   {
        name: "NTV Kenya",
        type: "youtube",
        channelUrl:"UCqBJ47FjJcl61fmSbcadAVg",
        videoId: "_wQ79STCPxQ",
        logo: "https://static.ntvkenya.co.ke/assets/brand-logos/ntv-logo-white.png",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Citizen TV",
        type: "youtube",
        channelUrl: "UChBQgieUidXV1CmDxSdRm3g",
        videoId: "gzw1hoiBK6Q",
        logo: "https://static.wikia.nocookie.net/logopedia/images/7/70/Citizen_TV_%28Kenya%29_logo.png",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "KTN Home",
        type: "youtube",
        channelUrl: "UCKVsdeoHExltrWMuK0hOWmg",
        videoId: "aszsHfAKjfk",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/KTN.2014-present_logo.jpg/250px-KTN.2014-present_logo.jpg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "K24 TV",
        type: "m3u8",
        streamUrl: "https://livecdn.premiumfree.tv/afxpstr/K24Main/index.m3u8",
        logo: "images/k24-live.jpeg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "KBC Channel 1",
        type: "stream",
        streamUrl: "https://www.youtube.com/embed/live_stream?channel=UCegApUZsuaWaXYf5g9W8Mzw&autoplay=1&rel=0&showinfo=0&enablejsapi=1&origin=https%3A%2F%2Fwww.kenyantv.live",
        logo: "https://livetvcentral.com/imgs/tvs/3304.jpg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "TV 47",
        type: "youtube",
        channelUrl:"UC_zA9UIWE1fB-jfFk_DBSYw",
        logo: "images/tv47.png",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Ebru Africa",
        type: "stream",
        streamUrl: "https://embed.twitch.tv?autoplay=true&channel=ebrutvkenya&height=100%25&layout=video&parent=kenyantv.live&width=100%25&embed-chat=false",
        logo: "images/ebru-tv-live.jpg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Lookuptv",
        type: "stream",
        streamUrl: "//ok.ru/videoembed/2352940981899",
        logo: "images/lookuptv-live.png",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Inooro TV",
        type: "m3u8",
        streamUrl: "https://stream-74937.castr.net/5ea49827ff3b5d7b22708777/live_6382dd401ce311f097d41d161154da2f/index.m3u8",
        logo: "https://keonline.eu-central-1.linodeobjects.com/uploads/logo/nf0fohGccEB5orpXeraqamkEo3Q8sNPrYWtGvIaW.jpg",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Ramogi TV",
        type: "stream",
        streamUrl: "https://player.castr.com/live_9b761ff063f511eca12909b8ef1524b4?autoplay=1&mute=0&enablejsapi=1&rel=0&showinfo=0&mute=0",
        logo: "https://kenyalivetv.co.ke/uploads/tv/3_icon_ramogitv.webp",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "KASS TV",
        type: "stream",
        streamUrl: "https://goliveafrica.media/live/1/kasstv&embed=1",
        logo: "https://lh3.googleusercontent.com/3XKtcKiWjlpm6BcBqN50QIx2yqvSRh4ppKmonV2c-kHmjT-6ThHlXc5Nn_UjtNOZXn-W=s200",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Lolwe TV",
        type: "stream",
        streamUrl: "https://goliveafrica.media/live/1/LOLWETV?embed=1&mute=0",
        logo: "https://lolwetv.co.ke/wp-content/uploads/2023/10/MASTER-LOGO-OCT-EDIT-1.png",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Jambu TV",
        type: "m3u8",
        streamUrl: "https://tv.rstv1.com/hls/jambu1.m3u8",
        logo: "https://kenyalivetv.co.ke/uploads/tv/20_icon_jambutv.webp",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Meru TV",
        type: "m3u8",
        streamUrl: "https://goliveafrica.media:9998/live/628e5c1991061/index.m3u8",
        logo: "images/meru-tv-live.png",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Weru TV",
        type: "stream",
        streamUrl: "https://ok.ru/videoembed/330582007485?nochat=1&autoplay=0",
        logo: "images/weru-tv-live.jpeg",
        category: "Local",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Horizon TV",
        type: "stream",
        streamUrl: "https://player.twitch.tv/?channel=horizontvkenya&parent=kenyantv.live",
        logo: "images/horizon-tv-live.jpeg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "HopeTV",
        type: "stream",
        streamUrl: "https://iframe.dacast.com/live/c27b4ca6-1dc4-2e19-9e94-2282b041e658/c4cf5692-c80d-c79c-b10a-830c04147959?autoplay=1&loop=1&mute=0",
        logo: "images/hope-tv-live.jpg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Family TV",
        type: "stream",
        streamUrl: "https://player.castr.com/live_6c33b9a069cf11eebe6363d9db657015?autoplay=1&mute=0&loop=1",
        logo: "images/family-tv-live.jpeg",
        category: "National",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Romanza Africa",
        type: "m3u8",
        streamUrl: "https://livecdn.premiumfree.tv/afxpstr/Romanza/index.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Romanza%2B%C3%81frica_logo.jpg",
        category: "Entertainment",
        Rating: "PG",
        infoPage: "N/A"
      },
      {
        name: "CGTN+",
        type: "m3u8",
        streamUrl: "https://amg00405-rakutentv-cgtndocumentary-rakuten-0ql8j.amagi.tv/master480p.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/CGTN.png",
        category: "News",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Aljazeera",
        type: "youtube",
        channelUrl: "UCNye-wNBqNL5ZzHSJj3l8Bg",
        videoId: "gCNeDWCI0vo",
        logo: "https://logos-world.net/wp-content/uploads/2023/04/Al-Jazeera-Logo-500x281.png",
        category: "News",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "CNN",
        type: "m3u8",
        streamUrl: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
        category: "News",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "France 24",
        type: "m3u8",
        streamUrl: "https://a-cdn.klowdtv.com/live2/france24_720p/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/0/02/France_24_2013.svg",
        category: "News",
        Rating: "GE",
        infoPage: "N/A"
      },
     {
        name: "Chelsea TV",
        type: "youtube",
        channelUrl: "UCU2PacFf99vhb3hNiYDmxww",
        videoId: "YY1B0zue_cI",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROszwWjb7R-oGWkyhdJqI3sQU143Wdogg55w&s",
        category: "Sports",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "Madrid TV",
        type: "m3u8",
        streamUrl: "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8",
        logo: "https://yt3.googleusercontent.com/TyNbisxuIwzUBjjNkUg8mOqR9_L2eKYShayM5A-kjpFeb0p47QCail4wuUn5KfCbDmB8yQ8RnD4=s900-c-k-c0x00ffffff-no-rj",
        category: "Sports",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "BeIN sports xtra",
        type: "m3u8",
        streamUrl: "https://bein-beinxtrasports-firetv.amagi.tv/playlist.m3u8",
        logo: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/shop/mar/bein-sports.png",
        category: "Sports",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "FIFA+",
        type: "m3u8",
        streamUrl: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8",
        logo: "https://cdn.mos.cms.futurecdn.net/Tdvb4DPB6XfaMgAdxV4aZB.png",
        category: "Sports",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "DAZN combat",
        type: "m3u8",
        streamUrl: "https://dazn-combat-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-dazn-combat-rakuten/CDN/master.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/7/7c/DAZN.svg",
        category: "Sports",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "PFL TV",
        type: "m3u8",
        streamUrl: "https://d856dff4.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWdiX1BGTE1NQV9ITFM/playlist.m3u8",
        logo: "https://pflmma-prod.s3.us-east-1.amazonaws.com/assets/img/base/shield-logo-international.png",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Redbull TV",
        type: "m3u8",
        streamUrl: "https://dms.redbull.tv/v5/destination/rbtv/linear-borb/personal_computer/http/ke/en/playlist.m3u8",
        logo: "https://i.ytimg.com/vi/Ao-Rbi8qq7c/maxresdefault.jpg",
        category: "Sports",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "National Geographic",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/National_Geographic/index.m3u8",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNmQpa8NPoHlt0qllQrNCmEALB2bPFJRZRA&s",
        category: "Entertainment",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "Nat Geo Wild",
        type: "m3u8",
        streamUrl: "https%3a//fl1.moveonjoy.com/Nat_Geo_Wild/index.m3u8",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNmQpa8NPoHlt0qllQrNCmEALB2bPFJRZRA&s",
        category: "Entertainment",
        Rating: "GE",
        infoPage: "N/A"
      },
        {
        name: "Paramount",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/PARAMOUNT_NETWORK/index.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Paramount_Pictures_2022_%28Blue%29.svg/960px-Paramount_Pictures_2022_%28Blue%29.svg.png",
        category: "Entertainment",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "Just for Laughs",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-64704954e536e0faaf10be9f.m3u8?includeAllStreams=1&X-Plex-Product=Plex+Mediaverse&X-Plex-Token=smLAakyp6S3j3-xV84Vo",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNmQpa8NPoHlt0qllQrNCmEALB2bPFJRZRA&s",
        category: "Entertainment",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "LOL network",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-61e805952502a7a6fa84d70f.m3u8?includeAllStreams=1&X-Plex-Product=Plex+Mediaverse&X-Plex-Token=smLAakyp6S3j3-xV84Vo",
        logo: "https://yt3.googleusercontent.com/wfugK-_Y4Hr89XKEAOEi2wiK8sRfqz4xvj2B_N7xEcFyiuBmcrM7519oFOnyM7aUpnXUyi5t-w=s900-c-k-c0x00ffffff-no-rj",
        category: "Entertainment",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "LOL standup",
        type: "stream",
        streamUrl: "https://www.youtube.com/embed/ctyzvJLoid0",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_s_YiRZRzNuu0ant8TPhSHnlzTINsOhUU5A&s",
        category: "Entertainment",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "We love cars",
        type: "m3u8",
        streamUrl: "https://30a-tv.com/feeds/vidaa/cars.m3u8",
        logo: "https://www.usnews.com/object/image/00000191-d821-d8b8-adf7-f97944b10000/chevrolet-corvette-zr1-coupe-001.jpg?update-time=1725907944302&size=listiclePhoto",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "popular science",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-656fb850cb7e8e6a9bc3f36e.m3u8?includeAllStreams=1&X-Plex-Product=Plex+Mediaverse&X-Plex-Token=smLAakyp6S3j3-xV84Vo",
        logo: "https://static.wikia.nocookie.net/logopedia/images/f/f6/Science_2017.svg/revision/latest/scale-to-width-down/250?cb=20240724210548",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "TED TV",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-62ab5aabbb869dd0df6a3487.m3u8?includeAllStreams=1&X-Plex-Product=Plex+Mediaverse&X-Plex-Token=smLAakyp6S3j3-xV84Vo",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-ted-logo-icon-svg-download-png-461831.png",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Motorsport TV",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-6408c82eebb23ab878e8ddbb.m3u8?includeAllStreams=1&X-Plex-Product=Plex+Mediaverse&X-Plex-Token=kqz-_pzPUsowvS7tRYNS",
        logo: "https://w7.pngwing.com/pngs/695/799/png-transparent-motors-tv-television-channel-motorsport-auto-racing-others.png",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Garage TV",
        type: "m3u8",
        streamUrl: "https://stream1.sersat.com/hls/garagetv.m3u8",
        logo: "https://e7.pngegg.com/pngimages/926/901/png-clipart-el-garage-tv-television-publica-argentina-television-channel-logo-nick-jr-television-emblem.png",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "MAV TV",
        type: "m3u8",
        streamUrl: "https://d3h07n6l1exhds.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-0z2yyo4dxctc7/playlist.m3u8",
        logo: "https://assets.starsnationaltour.com/data/2024/02/MAVTV-Logo-300x170.webp",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "AMC Channel",
        type: "m3u8",
        streamUrl: "https://c5ca4726.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UGxleF9TdG9yaWVzQnlBTUNfQ01BRg/playlist.m3u8?ads.wurl_channel=1326&ads.wurl_name=StoriesByAMC&ads.coppa=0&ads.us_privacy=1YNN&ads.psid=&ads.targetopt=1&ads.plex_token=qBJATNESiUtfmBAPkULy&ads.plex_id=6391316371aa92c2f49dc234&ads.ua=Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64%3B%20rv%3A134.0)%20Gecko%2F20100101%20Firefox%2F134.0&ads.app_bundle=com.plexapp.desktop&ads.app_store_url=https%3A%2F%2Fapp.plex.tv&ads.gdpr=0&ads.consent=0&ads.device_type=desktop&ads.device_id_type=",
        logo: "https://shop.amc.com/cdn/shop/files/AMC-ShopByShowTile-360x540-Option1_1080x.jpg?v=1649348443",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "CW",
        type: "m3u8",
        streamUrl: "https://cvtv.cvalley.net/hls/KCWECW/KCWECW.m3u8",
        logo: "https://streamingbetter.com/wp-content/uploads/2024/01/The-CW-new-logo-1200x675.jpg",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Miramax movies",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-661fca34414d94009d1206ec/variant.m3u8?x-plex-token=smLAakyp6S3j3-xV84Vo&x-plex-advertising-identifier=&x-plex-client-identifier=724c6121-eadf-4ae2-8ab0-3026d3c7c164&x-plex-playback-id=p_11bd71fe-d16b-4169-a5cb-6c9337323817&x-plex-playback-session-id=&x-plex-session-id=&x-plex-device=Linux&x-plex-device-name=Plex+Mediaverse&x-plex-advertising-donottrack=1&x-plex-drm=&x-plex-model=&x-plex-platform=Firefox&x-plex-platform-version=134.0&x-plex-product=Plex+Mediaverse&x-plex-device-screen-resolution=&x-plex-device-vendor=&x-plex-version=&x-plex-provider-streaming-start=1759323258&url=c4ba6dc2d30047b6f3655d98c0377b4c-47c0f35a49d7ecb0e598de5af0980bf7997eb3d5b6cb5f0e9e79f80eabe0194c830bfe908809b70b3387d073a2701ab3e2f12342c912fd09e3d8869a398f9e51ae4799e4b318dbdaf2fccca8b638429d815e849bf3b799c909abd34d14e34016daa09ade0c9c9ac17651eb98c2c686426f37d5c592ccaff8ed4db56fe80b114a25918bda83af9a4d3d2f70c0e9bb2b682ac8bef67608b9ce5a836753a06c186ab7a2f48f4b596da2b3c7c9700819ff8c68b58892bfad4ece0846d86d962f304ddc72736196ee7d839959423e3dd3b2a4",
        logo: "https://variety.com/wp-content/uploads/2023/11/TH_Miramax.jpg",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Wu Tang collection",
        type: "m3u8",
        streamUrl: "https://livechannel.mdc.akamaized.net/stitch/livechannel/1279/master.m3u8?channel=live_stream_1279",
        logo: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fimages%2Fott_channels%2Farts%2Fwu-tang-collection.jpg",
        category: "Movies",
        Rating: "PG",
        infoPage: "N/A"
      },
      {
        name: "Hollywood classic",
        type: "m3u8",
        streamUrl: "https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-66be944f8711311880995280.m3u8?includeAllStreams=1&X-Plex-Product=Plex+Mediaverse&X-Plex-Token=SHLUc5JKDYes9d_z94Cw",
        logo: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F6d941e2d-2852-4b6e-83e0-99a10920ddb3%2FAction_Hollywood_Movies_artwork_horizontal_-_Angela_ChanRDX.jpg",
        category: "Movies",
        Rating: "PG",
        infoPage: "N/A"
      },
      {
        name: "Nickelodeon Junior",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/NICK_JR/index.m3u8",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhojXucO7YQMjJjynua9IX3BN1AZIFnoNeOqRBN2_9TIaFlMwmbMq6XrWhg5_wIKmAf9PcUxSI2etgz95Pmi12Foqxe4F_ghNctgEhbVflI7n6Lttq6pMdQXNhaf4_ho32HNfy32bV2lURpJfdTuij15RasZ2gqVGC38nMz30XHzBZtcMEGgSpq/s400/nick-jr-logo-2023_3.jpg",
        category: "Kids",
        Rating: "PG",
        infoPage: "N/A"
      },
      {
        name: "Nick toons",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/NICKTOONS/index.m3u8",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhojXucO7YQMjJjynua9IX3BN1AZIFnoNeOqRBN2_9TIaFlMwmbMq6XrWhg5_wIKmAf9PcUxSI2etgz95Pmi12Foqxe4F_ghNctgEhbVflI7n6Lttq6pMdQXNhaf4_ho32HNfy32bV2lURpJfdTuij15RasZ2gqVGC38nMz30XHzBZtcMEGgSpq/s400/nick-jr-logo-2023_3.jpg",
        category: "Kids",
        Rating: "PG",
        infoPage: "N/A"
      },
      {
        name: "KIDDO+",
        type: "m3u8",
        streamUrl: "https://streams2.sofast.tv/ptnr-stirr/genre-Education/lang-English/ctgr-Kids/title-KIDDO-ENG/sofastplayout/8258122f-b4c0-416b-a2db-8407847f0c3c_1000015692_HLS/master.m3u8",
        logo: "https://play-lh.googleusercontent.com/Z1LsqXqvYMagG76953Fauhz5uOQehL3V-xCGRDDahc94mZYB-rMwoosoTbpqs_bGqpH8=w240-h480",
        category: "Kids",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "Ninja Kids",
        type: "m3u8",
        streamUrl: "https://playworksdigital-ninjakidztv-1-us.xumo.wurl.tv/playlist.m3u8",
        logo: "https://images-na.ssl-images-amazon.com/images/I/71SJhmdG3sS._UL1200_.jpg",
        category: "Kids",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "Avengers Assemble",
        type: "stream",
        streamUrl: "https://www.youtube.com/embed/13GZtHqYrLY",
        logo: "https://i.etsystatic.com/42838726/r/il/c3f230/5083723956/il_fullxfull.5083723956_p1qr.jpg",
        category: "Kids",
        Rating: "GE",
        infoPage: "N/A"
      },

      {
        name: "Sponge Bob TV",
        type: "youtube",
        channelUrl: "UCx27Pkk8plpiosF14qXq-VA",
        videoId: "YzMsBTpLHtE",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrcXNXIy_q6rzLC77a1g7IgAt4JuyRvtFqA&s",
        category: "Kids",
        Rating: "GE",
        infoPage: "N/A"
      },
      {
        name: "Weather Spy",
        type: "m3u8",
        streamUrl: "https://jukin-weatherspy-2-in.samsung.wurl.tv/playlist.m3u8",
        logo: "https://www.tubefilter.com/wp-content/uploads/2020/07/weather-spy-1920x1131.jpg",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
 

      {
        name: "Love Nature",
        type: "stream",
        streamUrl: "https://www.youtube.com/embed/daqB3i9WYIY",
        logo: "https://static.wikia.nocookie.net/logos/images/c/c2/Love_Nature_4K.png/revision/latest/scale-to-width-down/340?cb=20211105035409&path-prefix=vi",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Wild Earth",
        type: "m3u8",
        streamUrl: "https://d2f9g9rfw2kx84.cloudfront.net/playlist/amg01290-wildearth-oando/cb553d167e6c64899dd43e64d4ef42a1d92414fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257596cdb5b987600c4da64a848240b4227c1c7ad79d9981209b3d80e3a5cea384b07a1460ad126573c89ab5e0ed53bb47a0046bd443b0261d4f058ac2052d8895cd92b3489abd46739780c0ecb5e0ee2c23799d7d9a89a4f5d8180367aeb5357dcfc178d8c49f9dc8505ca00a457cb26e8f7d01707ddb0aca716ec15ed240c224237f9d23ffbcd2c13444872abcc5b083f7237ad44e5073d1ccc376649eaf0dbba2ade1edd9d20936436b63a8e25a21d8571a305abe001f5e3eb9f0a7968f59f1b4d2eaef0b8cae36d658230aff9a9cf6526c8a5403617802dff2728339fb29944d59345c7e672c592600f3dc69e5dd4cce1d7a1e0ff2df640e6cefa8d25380d09632f8947ab9661da53b25ea1dc1627535504e0da79cd88cc4672056b839355c01c0bb3b8dad687ee5a06a6fbf98ebfbb2976bc061f0002776417a2a4c8b1/158/640x360_1020800/index.m3u8",
        logo: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F458264fd-11c7-4568-9177-2373626ff752%2FWildEarth_artwork_Horizontal_logordx.jpg",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "NatGeo Animals",
        type: "youtube",
        channelUrl: "UCDPk9MG2RexnOMGTD-YnSnA",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-national-geographic-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461820.png?f=webp",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Nature time",
        type: "m3u8",
        streamUrl: "https://shls-live-ak.akamaized.net/out/v1/b06a89a463764d3688cda337d40dc5bf/index.m3u8",
        logo: "https://www.cxtv.com.br/img/Tvs/Logo/webp-l/76c1f7bf76617738201aa7ad7ca01972.webp",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "fuse",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/FUSE/index.m3u8",
        logo: "https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/pwshhr5ddhfvqqk6nu4e?ik-sanitizeSvg=true",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "TVJamaica",
        type: "m3u8",
        streamUrl: "https://vod2live.univtec.com/manifest/a99a1804-dc83-411f-8c1c-b62f08cdfa59.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/2/2c/Television_Jamaica_Logo.png/",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "MovieSphere",
        type: "m3u8",
        streamUrl: "https://amg00353-lionsgatestudio-moviesphere-xumo-zh5u0.amagi.tv/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/4/40/MovieSphere_2020_logo.jpg/",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Lifetime Movies",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/LIFETIME_MOVIE_NETWORK/index.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/2/2c/Television_Jamaica_Logo.png/",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Jewelry TV",
        type: "m3u8",
        streamUrl: "https://content.jwplatform.com/live/broadcast/oe7UD7Ag.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/2/2c/Television_Jamaica_Logo.png/",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Monte Carlo",
        type: "m3u8",
        streamUrl: "https://pkg2.frontlayer.net/pseudolive/fl718492/index.m3u8?session=1749100165",
        logo: "https://static.wikia.nocookie.net/logopedia/images/5/53/LOGO_Monte_Carlo_2017_mayusculas_letra_negra.png/",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Localish TV",
        type: "m3u8",
        streamUrl: "https://livetv-fa.tubi.video/localish/index.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/3/3e/ERGj07CXkAAn5Xl.jpg",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Global Fashion TV",
        type: "m3u8",
        streamUrl: "https://pubgfc.teleosmedia.com/linear/globalfashionchannel/globalfashionchannel/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/8/81/FASHION_TV_2001.gif",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Fite TV",
        type: "m3u8",
        streamUrl: "https://d3d85c7qkywguj.cloudfront.net/scheduler/scheduleMaster/263/variant/22099681.m3u8",
        logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/be74b3f4-088f-4981-a2fa-c8b64335dc92/dfhlbvm-7a0d30a1-e894-4301-8519-aa3acc144c52.png/v1/fill/w_894,h_894,q_70,strp/fite_plus_logo_svg_by_hellmen45_dfhlbvm-pre.jpg",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "NitroCircus",
        type: "m3u8",
        streamUrl: "https://amg13231-actve-amg13231c1-rakuten-us-5604.playouts.now.amagi.tv/playlist.m3u8",
        logo: "https://cdn.brandfetch.io/idezrRhd60/w/336/h/336/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Racer INT",
        type: "m3u8",
        streamUrl: "https://amg00378-mavtv-amg00378c2-rakuten-us-1048.playouts.now.amagi.tv/playlist/amg00378-mavtvfast-motorsportsnetwork-rakutenus/playlist.m3u8",
        logo: "https://www.freelivesports.tv/wp-content/uploads/2025/04/racer-int-212.png",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "AfroBeats tv",
        type: "m3u8",
        streamUrl: "https://stream.ecable.tv/afrobeats/index.m3u8",
        logo: "https://mytv256.com/upload/afrobeats%20tv.jpg",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },     
      {
        name: "Amusic TV",
        type: "m3u8",
        streamUrl: "https://mn-nl.mncdn.com/amusictv/amusicsrt.stream/playlist.m3u8",
        logo: "https://pbs.twimg.com/profile_images/916499099037270016/omHUSyJF_400x400.jpg",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },   
      {
        name: "CMC",
        type: "m3u8",
        streamUrl: "https://rpn.bozztv.com/inim03/live1/cmctv/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9",
        logo: "https://digitaladvertisingmedia.com/wp-content/uploads/2019/12/S_USACMC00000-300x225.jpg",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "DLX",
        type: "m3u8",
        streamUrl: "https://sdn-global-live-streaming-packager-cache.3qsdn.com/65183/692d3d16e5cae_13365477_2512010700_2.m3u8",
        logo: "https://deluxemusic.de/wp-content/uploads/sites/4/2023/01/DLX_RAP_LOGO_RGB-1.png",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },         
      {
        name: "Itv Afro",
        type: "m3u8",
        streamUrl: "https://ca1.buximedia.com/itv/afrobeats/tracks-v1a1/mono.m3u8",
        logo: "https://p7.hiclipart.com/preview/837/526/450/itv-logo-of-the-bbc-television-news-2015-nyc-pride.jpg",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Trace Hits",
        type: "m3u8",
        streamUrl: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/trace-uk/encrypted.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/TRACE_Hits.png",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Now 90s",
        type: "m3u8",
        streamUrl: "https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01076-lightning-now90s00s-rakutengb/cb4d3e4f7b706f88cf9b3f6cd5f040f3d10565825f3ade346b8822ea2a8b4605d9edeec6f34bff70349e1ed57176340f182fdb51d67a6ec1da71b813727616709986b262c9ee475ae98710282ab27a1e50fe0f05a67c1177dfe60247d469e6375551ac0c360f30d8ed5df96b0694875f967e28ddadc03038745b429c0c08e3a359abffe95d138c0ec68b35703af4d5d6a870bea60e85e58a02da16d2668a4dc3c5a4d48e32a3bca316cc772eb0943a581bbc956b9cd958ccbad0096bdf192c377feb84ca7921671cff6ceb3ba504fe60bab57eeb9c378e7032f42c9741803f8451bc6381cc41baa4b7d3430e6cea941b291ff1b4fbcad73c3da87ebbbab18b4c2acdad546a51933c8c716568d9bdec1187c81ad9e473d4e4394c6891d163928fb785e0a8c21bc876849786ff5727626a0a179e27e1f00af626c771a4c2125b336b4dbf9f53cb9e9913704e4688954696743fbcc88097d01e31a83243ba89f117beaf0a3151b07ebe06e757f06f056263363930/28/1920x1080_4716800/index.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/8/86/NOW_90s.png",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "VEVO Pop",
        type: "m3u8",
        streamUrl: "https://amg00056-amg00056c6-rakuten-uk-3235.playouts.now.amagi.tv/playlist.m3u8",
        logo: "https://cdn.brandfetch.io/idKHVxuoQT/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1764236170765",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Rakuten Drama",
        type: "m3u8",
        streamUrl: "https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8",
        logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "VEVO Hiphop RnB",
        type: "m3u8",
        streamUrl: "https://amg00056-amg00056c26-rakuten-uk-3236.playouts.now.amagi.tv/playlist.m3u8",
        logo: "https://cdn.brandfetch.io/idKHVxuoQT/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1764236170765",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Rakuten Action",
        type: "m3u8",
        streamUrl: "https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8",
        logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Rakuten Comedy",
        type: "m3u8",
        streamUrl: "https://a300af98e00746e2acf2346f43e47bd1.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6191/master.m3u8",
        logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Rakuten Comedy 2",
        type: "m3u8",
        streamUrl: "https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8",
        logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Rakuten top movies",
        type: "m3u8",
        streamUrl: "https://0145451975a64b35866170fd2e8fa486.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-5987/master.m3u8",
        logo: "https://rakutenadvertising.com/wp-content/uploads/sites/2/2024/05/GMT-6002_2024_Web_Media_RakutenTV.png",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Charge tv",
        type: "m3u8",
        streamUrl: "https://fast-channels.sinclairstoryline.com/CHARGE/index.m3u8",
        logo: "https://kodi.tv/images/addons/omega/plugin.video.charge/resources/icon.png",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "ABN Bible ",
        type: "m3u8",
        streamUrl: "https://mediaserver.abnvideos.com/streams/abnbiblemovies.m3u8",
        logo: "https://mir-s3-cdn-cf.behance.net/projects/404/892bcc30871625.Y3JvcCwxMzE0LDEwMjgsMjk2LDQy.jpg",
        category: "Movies",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "3ABN Kids ",
        type: "m3u8",
        streamUrl: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/2/28/3ABN_Kids_Network_2014.svg",
        category: "Kids",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Baby Shark TV ",
        type: "m3u8",
        streamUrl: "https://c0c65b821b3542c3a4dca92702f59944.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_BabySharkTV/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/c/c7/Pinkfong_Baby_Shark.svg",
        category: "Kids",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Disney channel",
        type: "m3u8",
        streamUrl: "https://fl31.moveonjoy.com/DISNEY/index.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/9/9d/Disney_Channel_(2010).svg",
        category: "Kids",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Disney Junior",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/DISNEY_JR/index.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/9/9d/Disney_Channel_(2010).svg",
        category: "Kids",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Duck TV",
        type: "m3u8",
        streamUrl: "https://mmm-dk.otteravision.com/DexaYJdJXkLqFxTK_DuckTVHDSAMS/DuckTVHDSAMS.stream/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/f/fd/Duck_TV_Plus.svg",
        category: "Kids",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Tiny PoP TV",
        type: "m3u8",
        streamUrl: "https://amg01753-narrativeuk-amg01753c1-lg-gb-1830.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-tinypop-lggb/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/7/7e/Tiny_Pop_2018.svg",
        category: "Kids",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Beach TV Florida",
        type: "m3u8",
        streamUrl: "https://5ed325193d4e1.streamlock.net:444/LiveTV/KTVHD/playlist.m3u8",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtMVKEbyTbhDGSYwXVkarL0kk3_uk4vwANQ&s",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Beach TV Panama",
        type: "m3u8",
        streamUrl: "https://5ed325193d4e1.streamlock.net:444/LiveTV/BTVHD/playlist.m3u8",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtMVKEbyTbhDGSYwXVkarL0kk3_uk4vwANQ&s",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Palm Beaches TV",
        type: "m3u8",
        streamUrl: "https://live.feed.thepalmbeaches.tv/index.m3u8",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtMVKEbyTbhDGSYwXVkarL0kk3_uk4vwANQ&s",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Tanzania Safari ",
        type: "m3u8",
        streamUrl: "https://stream-134630.castr.net/5fe35eae8c53540cab83659a/live_31dabe40323511f08b8efff0016f3b67/index.m3u8",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7icoJMfGlL3wYqYfPV2rr-X3QmT70VRs8SQ&s",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "BBC Earth",
        type: "m3u8",
        streamUrl: "https://amg00793-amg00793c6-firetv-us-4067.playouts.now.amagi.tv/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/7/7b/BBC_Earth_circle.png",
        category: "Nature",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Britbox mysteries",
        type: "m3u8",
        streamUrl: "https://aegis-cloudfront-1.tubi.video/c95700f8-e51c-4a36-ad46-56f70fc9f1d9/playlist.m3u8",
        logo: "https://static.wikia.nocookie.net/logopedia/images/4/40/Britbox_2021_Stacked.svg",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Comedy Central",
        type: "m3u8",
        streamUrl: "https://fl1.moveonjoy.com/Comedy_Central/index.m3u8",
        logo: "https://cdn.brandfetch.io/idEjpV-1pI/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1668421811545",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Cops TV",
        type: "m3u8",
        streamUrl: "https://a7d6af1c184e465db4f39316a5181c1f.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/RakutenTV-eu_COPS/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/COPS.jpg/250px-COPS.jpg",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "nosey",
        type: "m3u8",
        streamUrl: "https://aegis-cloudfront-1.tubi.video/f111d6c2-02bf-45fb-9a90-2e55b18d9f70/playlist.m3u8",
        logo: "https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/ekrujg3jauqksps6clsq?ik-sanitizeSvg=true",
        category: "Entertainment",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Bob Ross channel",
        type: "m3u8",
        streamUrl: "https://aegis-cloudfront-1.tubi.video/45301c94-0d40-4cbb-b342-f5dc7949d76c/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/The_Joy_of_Painting_title_screen.jpg/250px-The_Joy_of_Painting_title_screen.jpg",
        category: "Lifestyle",
        Rating: "N/A",
        infoPage: "N/A"
      },     
      {
        name: "Euro news",
        type: "m3u8",
        streamUrl: "https://aegis-cloudfront-1.tubi.video/45301c94-0d40-4cbb-b342-f5dc7949d76c/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Euronews_Logo_2025.svg/250px-Euronews_Logo_2025.svg.png",
        category: "News",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Caribbean World Channel",
        type: "m3u8",
        streamUrl: "https://live-us-cdn-1.tvstartupengine.com/live/playlist-prod-da1ba36f-39ba-4347-acce-c3a31de907f3/index.m3u8",
        logo: "https://image.roku.com/developer_channels/prod/dd96e4e395f9b87ded4e034c080aa9cf1bef0b9c251f0b73405fb1189c01b156.png",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "surf Roots tv",
        type: "m3u8",
        streamUrl: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/surf-roots-tv/master.m3u8",
        logo: "https://surfroots.com/cdn/shop/files/surf_rootssquaremicflag900x900_1200x1200.png",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Africa news.",
        type: "m3u8",
        streamUrl: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/africanews/africanews-en.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Africanews._alternative_logo_2016.png/250px-Africanews._alternative_logo_2016.png",
        category: "News",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Caribean 1 TV",
        type: "m3u8",
        streamUrl: "https://livechannel.mdc.akamaized.net/stitch/livechannel/1306/master.m3u8?channel=live_stream_1306",
        logo: "https://gizmeon.mdc.akamaized.net/thumbnails/fastchannel/1750358932957.png",
        category: "Music",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "ROI tv",
        type: "m3u8",
        streamUrl: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/roi-tv/master.m3u8",
        logo: "https://a.jsrdn.com/hls/23040/roi-tv/logo_20231219_221615_68.png",
        category: "Business",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "Enterpreneur TV",
        type: "m3u8",
        streamUrl: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/entrepreneur/master.m3u8",
        logo: "https://cdn.worldvectorlogo.com/logos/entrepreneur.svg",
        category: "Business",
        Rating: "N/A",
        infoPage: "N/A"
      },
      {
        name: "CGTN biz",
        type: "m3u8",
        streamUrl: "https://amg01314-amg01314c6-distrotv-us-10220.playouts.now.amagi.tv/playlist/amg01314-cgtn-cgtnglobalbiz-distrotvus/cb4d3e4f7b706f88cf9b3f6c83f144a1d1046180513ade346d8822ea2a8b4605d9edeec6f34bff70349e1ed57176340f182fdb51d67a6ec1da71b813727616709986b262c9ee475ae98710282ab27a1e50fe0f05a67c1177dfe60247d469e6375551ac0b3f0160dcb80dad6b0696d30a967e28ddadc0683a7c5e42960c58e6f25af7aee05916d966898b2219c16c5bb4ed028b8b48fed38119bc75bc428263f9ecfaa6e936d3d2d27dfa08ec200c56364295896f96da49a4df9b644bff1b4917443b8cc492fa5d728249572e9b95aaef3f8579a28821922e36ab10a741853d8f19c063cfc547b3b9a9d0767763d0ae3d6023b3abb68c895f59d534abf0bc8c212dc0ac64122ec869cb6c3b2a9ff9da66e7a974c6ec52efde68192b8e8246939cbb8d9dd3e72bcd7f86ad82993951006a0a14b94da38879d52ccf47acc11e20554336dff025cc92cd4e6a2d0082894dc00114f7cf9dd9a76451cb640814ec70d75a0869be5e0614e124ea8e2e639d3050fb5f51fa5c26ce4bfab913e1becbe07455dfb2cb4dfc6ee3861edde403ae68662868d9f3284c0b456edce77008421aa924b589b98b1d0804ffb9c4fad44a28024b72386fbce7e52ae3e4ae2819058f40327271111a821dc66cad66236422c008d6f6791ee307253ea8ae3c2f3c06f2e190a3d48cba2edc7ed7dcb33a202b4962cf506f473ee15fec338550eef1bd3cf06e1e21932b1829c490dded9c9262cf9260b94a137e01e0c5678d8dcf11196cbe857ad84ee7e96dd1091294ad9de433489628a613149fdd9e14903a0a002e7df2847f630ab9dc35d17b6def18d82789dc7492d63f624d6c111a90c83cfb2e59f745da56ca068d36b4bdfa25d16b90939c1673f28345233646741a6c46733e08b9d7ef726a5dc1b33def51eaea1afc0c0473777f8fd35b1eaae1790984756638f39f9ddff68a1106903fa02687304ae670082deac377b8d3e3a3aad63f0540ffbfb949bdae90ce9d8299682e790b5afeed565b62c05cb3e660cca20775e3858a9fb5489e67e733b49cf663a410a9c5a916ecf7b9fbe87c03514a5d9e98a71a75761dfeefdd1809b1ac2f8a9ca9935ed7be8ac90148/90/720x480_1241409/index.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/CGTN.png",
        category: "Business",
        Rating: "N/A",
        infoPage: "N/A"
      },       
      {
        name: "Billiard TV",
        type: "m3u8",
        streamUrl: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/billiard-tv/billi.m3u8",
        logo: "https://probilliardseries.com/wp-content/uploads/2024/08/billiardtv-jpg-1.webp",
        category: "Sports",
        Rating: "N/A",
        infoPage: "N/A"
      }
];

// Category sorting function
function getCategories() {
  const categories = new Set();
  channels.forEach(channel => {
    categories.add(channel.category);
  });
  
  // Define the desired order
  const categoryOrder = [
    "National",
    "Local",
    "News",
    "Business",
    "Entertainment", 
    "Sports",
    "Movies",
    "Music",
    "Kids",     
    "Comedy",
    "Nature",
    "Automotive",
    "Science",
    "Education",
    "Weather"
  ];
  
  // Get array from set
  const categoriesArray = Array.from(categories);
  
  // Sort categories according to defined order
  categoriesArray.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    
    // If both are in the order list, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    
    // If only A is in the order list, it comes first
    if (indexA !== -1) return -1;
    
    // If only B is in the order list, it comes first
    if (indexB !== -1) return 1;
    
    // If neither is in the order list, sort alphabetically
    return a.localeCompare(b);
  });
  
  return categoriesArray;
}
