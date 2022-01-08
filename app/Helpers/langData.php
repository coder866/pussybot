<?php 

namespace App\Helpers;
use Illuminate\Support\Str;

class langData
{
    public static function getLangCode($language){
    $langs=[
        "Afar"=>"aa", 
        "Abkhazian"=>"ab", 
        "Avestan"=>"ae", 
        "Afrikaans"=>"af", 
        "Akan"=>"ak", 
        "Amharic"=>"am", 
        "Aragonese"=>"an", 
        "Arabic"=>"ar", 
        "Assamese"=>"as", 
        "Avaric"=>"av", 
        "Aymara"=>"ay", 
        "Azerbaijani"=>"az", 
        "Bashkir"=>"ba", 
        "Belarusian"=>"be", 
        "Bulgarian"=>"bg", 
        "Bihari languages"=>"bh", 
        "Bislama"=>"bi", 
        "Bambara"=>"bm", 
        "Bengali"=>"bn", 
        "Tibetan"=>"bo", 
        "Breton"=>"br", 
        "Bosnian"=>"bs", 
        "Catalan; Valencian"=>"ca", 
        "Chechen"=>"ce", 
        "Chamorro"=>"ch", 
        "Corsican"=>"co", 
        "Cree"=>"cr", 
        "Czech"=>"cs", 
        "Church Slavic; Slavonic;
        Old Bulgarian"=>"cu", 
        "Chuvash"=>"cv", 
        "Welsh"=>"cy", 
        "Danish"=>"da", 
        "German"=>"de", 
        "Divehi; Dhivehi; Maldivian"=>"dv", 
        "Dzongkha"=>"dz", 
        "Ewe"=>"ee", 
        "Greek, Modern (1453-)"=>"el", 
        "English"=>"en", 
        "Esperanto"=>"eo", 
        "Spanish; Castilian"=>"es", 
        "Estonian"=>"et", 
        "Basque"=>"eu", 
        "Persian"=>"fa", 
        "Fulah"=>"ff", 
        "Finnish"=>"fi", 
        "Fijian"=>"fj", 
        "Faroese"=>"fo", 
        "French"=>"fr", 
        "Western Frisian"=>"fy", 
        "Irish"=>"ga", 
        "Gaelic; Scottish Gaelic"=>"gd", 
        "Galician"=>"gl", 
        "Guarani"=>"gn", 
        "Gujarati"=>"gu", 
        "Manx"=>"gv", 
        "Hausa"=>"ha", 
        "Hebrew"=>"he", 
        "Hindi"=>"hi", 
        "Hiri Motu"=>"ho", 
        "Croatian"=>"hr", 
        "Haitian; Haitian Creole"=>"ht", 
        "Hungarian"=>"hu", 
        "Armenian"=>"hy", 
        "Herero"=>"hz", 
        "Interlingua"=>"ia", 
        "Indonesian"=>"id", 
        "Interlingue; Occidental"=>"ie", 
        "Igbo"=>"ig", 
        "Sichuan Yi; Nuosu"=>"ii", 
        "Inupiaq"=>"ik", 
        "Ido"=>"io", 
        "Icelandic"=>"is", 
        "Italian"=>"it", 
        "Inuktitut"=>"iu", 
        "Japanese"=>"ja", 
        "Javanese"=>"jv", 
        "Georgian"=>"ka", 
        "Kongo"=>"kg", 
        "Kikuyu; Gikuyu"=>"ki", 
        "Kuanyama; Kwanyama"=>"kj", 
        "Kazakh"=>"kk", 
        "Kalaallisut; Greenlandic"=>"kl", 
        "Central Khmer"=>"km", 
        "Kannada"=>"kn", 
        "Korean"=>"ko", 
        "Kanuri"=>"kr", 
        "Kashmiri"=>"ks", 
        "Kurdish"=>"ku", 
        "Komi"=>"kv", 
        "Cornish"=>"kw", 
        "Kirghiz; Kyrgyz"=>"ky", 
        "Latin"=>"la", 
        "Luxembourgish; Letzeburgesch"=>"lb", 
        "Ganda"=>"lg", 
        "Limburgan; Limburger; Limburgish"=>"li", 
        "Lingala"=>"ln", 
        "Lao"=>"lo", 
        "Lithuanian"=>"lt", 
        "Luba-Katanga"=>"lu", 
        "Latvian"=>"lv", 
        "Malagasy"=>"mg", 
        "Marshallese"=>"mh", 
        "Maori"=>"mi", 
        "Macedonian"=>"mk", 
        "Malayalam"=>"ml", 
        "Mongolian"=>"mn", 
        "Marathi"=>"mr", 
        "Malay"=>"ms", 
        "Maltese"=>"mt", 
        "Burmese"=>"my", 
        "Nauru"=>"na", 
        "Norwegian Bokmål"=>"nb", 
        "Ndebele, North; North Ndebele"=>"nd", 
        "Nepali"=>"ne", 
        "Ndonga"=>"ng", 
        "Dutch; Flemish"=>"nl", 
        "Norwegian Nynorsk"=>"nn", 
        "Norwegian"=>"no", 
        "Ndebele, South; South Ndebele"=>"nr", 
        "Navajo; Navaho"=>"nv", 
        "Chichewa; Chewa; Nyanja"=>"ny", 
        "Occitan (post 1500)"=>"oc", 
        "Ojibwa"=>"oj", 
        "Oromo"=>"om", 
        "Oriya"=>"or", 
        "Ossetian; Ossetic"=>"os", 
        "Panjabi; Punjabi"=>"pa", 
        "Pali"=>"pi", 
        "Polish"=>"pl", 
        "Pushto; Pashto"=>"ps", 
        "Portuguese"=>"pt", 
        "Quechua"=>"qu", 
        "Romansh"=>"rm", 
        "Rundi"=>"rn", 
        "Romanian; Moldavian; Moldovan"=>"ro", 
        "Russian"=>"ru", 
        "Kinyarwanda"=>"rw", 
        "Sanskrit"=>"sa", 
        "Sardinian"=>"sc", 
        "Sindhi"=>"sd", 
        "Northern Sami"=>"se", 
        "Sango"=>"sg", 
        "Sinhala; Sinhalese"=>"si", 
        "Slovak"=>"sk", 
        "Slovenian"=>"sl", 
        "Samoan"=>"sm", 
        "Shona"=>"sn", 
        "Somali"=>"so", 
        "Albanian"=>"sq", 
        "Serbian"=>"sr", 
        "Swati"=>"ss", 
        "Sotho, Southern"=>"st", 
        "Sundanese"=>"su", 
        "Swedish"=>"sv", 
        "Swahili"=>"sw", 
        "Tamil"=>"ta", 
        "Telugu"=>"te", 
        "Tajik"=>"tg", 
        "Thai"=>"th", 
        "Tigrinya"=>"ti", 
        "Turkmen"=>"tk", 
        "Tagalog"=>"tl", 
        "Tswana"=>"tn", 
        "Tonga (Tonga Islands)"=>"to", 
        "Turkish"=>"tr", 
        "Tsonga"=>"ts", 
        "Tatar"=>"tt", 
        "Twi"=>"tw", 
        "Tahitian"=>"ty", 
        "Uighur; Uyghur"=>"ug", 
        "Ukrainian"=>"uk", 
        "Urdu"=>"ur", 
        "Uzbek"=>"uz", 
        "Venda"=>"ve", 
        "Vietnamese"=>"vi", 
        "Volapük"=>"vo", 
        "Walloon"=>"wa", 
        "Wolof"=>"wo", 
        "Xhosa"=>"xh", 
        "Yiddish"=>"yi", 
        "Yoruba"=>"yo", 
        "Zhuang; Chuang"=>"za", 
        "Chinese"=>"zh", 
        "Zulu"=>"zu"
    ];

    return collect($langs)->filter(function($value,$key) use($language){
        return false !== stristr($key, $language);
    })->values()->first();
}

}