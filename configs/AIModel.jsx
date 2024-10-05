
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_AI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Hozzon létre egy kurzus oktatóanyagot a következő részletekről a következő mezőkkel: kurzus neve, leírása, fejezet neve, körülbelül, időtartam: Kategoria: 'Prograamozás, Téma: Python, Szint: Alap, Hossz: 1 óra Részek Száma:5, JSON formátumban"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Python alapok kezdőknek\",\n  \"description\": \"Ez a kurzus megtanítja a Python programozási nyelv alapjait. Ismerkedjen meg a szintaxissal, az adat típusokkal, a változókkal, az operátorokkal és a vezérlési szerkezetekkel.\",\n  \"chapters\": [\n    {\n      \"name\": \"Bevezetés a Pythonba\",\n      \"duration\": \"15 perc\",\n      \"content\": \"Mi az a Python? Miért érdemes tanulni? A Python telepítése és beállítása.\"\n    },\n    {\n      \"name\": \"Alapvető szintaxis és adat típusok\",\n      \"duration\": \"20 perc\",\n      \"content\": \"Változók, adat típusok (számok, sztringek, Boole-értékek), operátorok (matematikai, összehasonlító, logikai).\"\n    },\n    {\n      \"name\": \"Vezérlési szerkezetek\",\n      \"duration\": \"15 perc\",\n      \"content\": \"Feltételes utasítások (if, else, elif), ciklusok (for, while).\"\n    },\n    {\n      \"name\": \"Listák és szótárak\",\n      \"duration\": \"10 perc\",\n      \"content\": \"Adatstruktúrák: Listák és szótárak létrehozása, elemek hozzáadása, módosítása, törlése.\"\n    },\n    {\n      \"name\": \"Függvények\",\n      \"duration\": \"10 perc\",\n      \"content\": \"Függvények definíciója, paraméterek, visszatérési érték.\"\n    }\n  ],\n  \"category\": \"Programozás\",\n  \"topic\": \"Python\",\n  \"level\": \"Alap\",\n  \"duration\": \"1 óra\",\n  \"parts_count\": 5\n}\n```\n"},
          ],
        },
      ],
    });
  
    /* const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text()); */
 