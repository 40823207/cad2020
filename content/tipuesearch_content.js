var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n 我的倉儲: https://github.com/40823207/cad2020 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '分組名單', 'text': '分組倉儲:\xa0 https://github.com/40823246/cad2020bg4 分組網站: \xa0 http://40823246.github.io/cad2020bg4 \n Repository:\xa0 40823207 \xa0 | Site: \xa0 40823207 \xa0張書鳳 Repository: \xa0 40823208 \xa0 | Site: \xa0 40823208 \xa0李翊帆 Repository: \xa0 40823216 \xa0 | Site: \xa0 40823216 \xa0陳弘勳 Repository: \xa0 40823218 \xa0 | Site: \xa0 40823218 \xa0陳致文 Repository: \xa0 40823220 \xa0 | Site: \xa0 40823220 \xa0黃彥維 Repository: \xa0 40823224 \xa0 | Site: \xa0 40823224 \xa0蕭君亦 Repository: \xa0 40823228 \xa0 | Site: \xa0 40823228 \xa0丁偉倫 Repository: \xa0 40823238 \xa0 | Site: \xa0 40823238 \xa0吳容輝 Repository: \xa0 40823244 \xa0 | Site: \xa0 40823244 \xa0吳承翰 Repository: \xa0 40823246 \xa0 | Site: \xa0 40823246 \xa0朱晉賢 \n', 'tags': '', 'url': '分組名單.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'W1~W5', 'text': '', 'tags': '', 'url': 'W1~W5.html'}, {'title': '零件圖', 'text': '圖檔 \n 零件1~50 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '零件圖.html'}, {'title': 'HW', 'text': '體積表 \n \n \n', 'tags': '', 'url': 'HW.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'HW2', 'text': '零件繪製過程 \n 零件 \n \n \n \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'W7~W9', 'text': '', 'tags': '', 'url': 'W7~W9.html'}, {'title': 'Pyslvs_UI', 'text': '下載Pyslvs_UI並使用Pyslvs_UI畫連桿使其運作 \n \n \n \n', 'tags': '', 'url': 'Pyslvs_UI.html'}, {'title': 'HW3', 'text': '試用RoKiSim \n \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': '小組討論', 'text': '\n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '小組討論.html'}, {'title': '工作分配', 'text': '機構設計: \xa0 40823207 , 40823216 , 40823218 , \xa0 40823220 , \xa0 40823228 , 40823244 \n 程式模擬: 40823208 , \xa0 40823224 , 40823238 , \xa0 40823246 \n', 'tags': '', 'url': '工作分配.html'}, {'title': 'W10~W14', 'text': '', 'tags': '', 'url': 'W10~W14.html'}, {'title': '參考資料', 'text': "影片 \n \n \n 參考文獻 \n Building a clean model tutorial \n (建構清晰模型教程) \n This tutorial will guide you step-by-step into building a clean simulation model, of a robot, or any other item. This is a very important topic, maybe the most important aspect, in order to have a nice looking, fast displaying, fast simulating and stable simulation model. \n \xa0 \n (本教程將指導您逐步構建機械或任何其他項目的清晰仿真模型。為了具有美觀、快速顯示、快速並穩定的模擬模型，或許這是非常重要的。 ) \n \xa0 \n To illustrate the model building process, we will be building following manipulator: \n \xa0 \n (為了說明模型的構建過程，我們將在下面構建機機械： ) \n \xa0 \n \xa0 \n \xa0 \n [Model of robotic manipulator] \n ([機械模型]) \n \xa0 \n Building the visible shapes \n ( 建立可見的形狀 ) \n When building a new model, first, we handle only the visual aspect of it: the dynamic aspect (its undelying even more simplified/optimized model), joints, sensors, etc. will be handled at a later stage. \n (在構建新模型時，首先，我們僅處理它的視覺方面：動態方面 ( 基本的簡化 / 優化的模型 ) 、關節、傳感器將在下一步動作做處理。 ) \n We could now directly create primitive shapes in CoppeliaSim with [Menu bar --> Add --> Primitive shape --> ...]. When doing this, we have the option to create\xa0 pure shapes, or regular shapes . Pure shape will be optimized for dynamic interaction, and also directly be dynamically enabled (i.e. fall, collide, but this can be disabled at a later stage). Primitive shapes will be simple meshes, which might not contain enough details or geometric accuracy for our application. Our other option in that case would be to import a mesh from an external application. \n (現在，我們可以在 CoppeliaSim 中直接創建基本形狀[選單欄  -->  新增  --> 基本形狀  --> ...] 。這樣做時，我們可以選擇創建單純的形狀或常規形狀。純形狀將對動態互動進行優化，並且直接被動態啟用 ( 即下降、碰撞，但這可以在之後禁用 ) 。基本形狀是簡單網格，沒有足夠的細節或幾何精度。在這種情況下，我們的另一種選擇是從外部應用程序導入網格。) \n When importing CAD data from an external application, the most important is to make sure that the CAD model is not too heavy, i.e. doesn't contain too many triangles. This requirement is important since a heavy model will be slow in display, and also slow down various calculation modules that might be used at a later stage (e.g.\xa0 minimum distance calculation , or\xa0 dynamics ). Following example is typically a no-go (even if, as we will see later, there are means to simplify the data within CoppeliaSim): \n (從外部應用程序導入 CAD 數據時，最重要的是確保 CAD 模型檔案不會太大，即不能包含太多三角形。這項要求很重要，因為檔案太大的模型的顯示速度很慢，而且可能還會降低之後使用的各種計算模組， ( 例如最小距離計算或動力學 ) ，以下示例通常是不可行的（即使我們稍後將看到有方法可以簡化 CoppeliaSim 中的數據） : ) \n \xa0 \n [Complex CAD data (in solid and wireframe)] \n ([複雜的CAD數據（實體和線框）]) \n Above CAD data is very heavy: it contains many triangles (more than 47'000), which would be ok if we would just use a single instance of it in an empty scene. But most of the time you will want to simulate several instances of a same robot, attach various types of grippers, and maybe have those robots interact with other robots, devices, or the environment. In that case, a simulation scene can quickly become too slow. Generally, we recommend to model a robot with no more than a total of 20'000 triangles, but most of the time 5'000-10'000 triangles would just do fine as well. Remember: less is better, in almost every aspect. \n (上面的 CAD 數據非常大：它包含許多的三角形（超過 47'000 個），如果我們只在空的場景中使用單個實例是可以的。但大多數時，需要模擬同一機械多個實例，安裝各種類型的夾手，也或許會讓那些機械許其他的機械做設備上以及環境的互換。在這種情況下，模擬場景時可能很快就會變得太慢。通常，我們建議對不超過 2 萬個三角形的機器人進行建模，但是在大多數情況下， 5 000 至 10 000 個三角形也可以。請記住：越少越好。 ) \n What makes above model so heavy? First, models that contain holes and small details will require much more triangular faces for a correct representation. So, if possible, try to remove all the holes, screws, the inside of objects, etc. from your original model data. If you have the original model data represented as parametric surfaces/objects, then it is most of the time a simple matter of selecting the items and deleting them (e.g. in Solidworks). The second important step is to export the original data with a limited precision: most CAD applications let you specify the level of details of exported meshes. It might also be important to export the objects in several steps, when the drawing consists of large and small objects; this is to avoid having large objects too precisely defined (too many triangles) and small objects too roughly defined (too few triangles): simply export large objects first (by adjusting the desired precision settings), then small objects (by adjusting up precision settings). \n (是什麼使上述模型檔案如此大呢？包含許多的孔急小細節的模型將需要更多的三角形面才能正確表示。因此，如果可以，請嘗試從原始模型數據中刪除所有的孔，螺釘以及模型內部。如果您將原始模型數據表示為參數化曲面 / 對象，則通常在大多數情況下只需選擇並刪除它們即可（例如 Solidworks ）。第二個重要的步驟是以有限的精度導出原始數據：大多數 CAD 應用程式都允許您指定導出網格的細節級別。當工程圖包含了大小物體時，分幾步導出物體也是很重要。這是為了避免大物體定義的太精確（三角形太多）和小物體定義的太粗糙（三角形太少）：只需先導出大物體（調整所需的精度設置），然後導出小物體（調整精度設置）即可。 ) \n CoppeliaSim supports currently following CAD data formats: OBJ, STL, DXF, 3DS (Windows only), and Collada. URDF is also supported, but not mentionned here since it is not a pure mesh-based file format. \n (CoppeliaSim當前支持以下CAD數據格式：OBJ，STL，DXF，3DS（僅Windows）和Collada。 還支持URDF，但由於它不是基於純網格的文件格式，因此此處未提及。) \n Now suppose that we have applied all possible simplifications as described in previous section. We might still end-up with a too heavy mesh after import: \n \xa0 \n (假設現在我們已經應用了上一節描述中的所有簡化。導入後，我們可能最終仍會留下一個過重的網格：) \n [Imported CAD data] \n [導入的CAD數據] \n", 'tags': '', 'url': '參考資料.html'}, {'title': '分球機', 'text': '圖檔 \n 組合 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '分球機.html'}, {'title': '零件', 'text': '\n \n \n 螺絲 \n 馬達 \n 皮帶輪 \n \n \n \n \n \n \n \n 皮帶 \n 支架2 \n 支架1 \n \n \n \n \n \n \n \n 支架 \n 底板 \n 偏心圓 \n \n \n \n \n \n \n \n \n \n \n \n 球座 \n 摩天輪 \n 鉚釘 \n \n \n \n \n \n \n \n 齒輪1 \n 齒輪2 \n 導軌1 \n \n \n \n \n \n \n \n 導軌2 \n c扣 \n 檔板 \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '零件.html'}, {'title': 'W15~W18', 'text': '', 'tags': '', 'url': 'W15~W18.html'}, {'title': '程式模擬', 'text': '導軌噴飛修改。 \n 問題:只能行程一次，而且會歪歪的。 \n -------------------------------------------- \n \n \n 修改導軌間隙 \n \n \n \n 但修改間隙後，滑塊依然穿模噴飛，得知不是間隙問題。 \n \n \n 偏心輪模擬 \n \n \n 軌道模擬 \n \n', 'tags': '', 'url': '程式模擬.html'}, {'title': '心得', 'text': '剛開學的前幾周是劃一些簡單的零件，本想說自己畫一些上傳給組員，盡一點微薄得貢獻，但沒想到大家很快就完成並且分享到群組，即使如此有這麼靠普的組員，我還是自己一點一點的畫，在放到網頁上。 \n 接下來的分組作業本討論出來的結果是做分幣機，但事情往往 不盡如人意，有人耳聞，別組跟我們主題一樣，所幸重新討論投票，最後表決結果是將原本的分幣機更改為分球機。 \n 這次的課程比以往得更加困難，很感謝組員們的努力。過程中大家都付出許多時間與精力，雖然最後沒有模擬成功，不過還是很開心能跟大家一起討論、互相幫忙。 \n \n', 'tags': '', 'url': '心得.html'}]};