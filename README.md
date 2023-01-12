# PicTouRe

We present PicTouRe – a picture-based tourism recommender. PicTouRe aims to mitigate people’s difficulties in explicitly expressing their touristic preferences, which is even more challenging in the initial phase of travel decision making. Addressing this issue, with PicTouRe we follow the idiom “a picture is worth a thousand words” and use pictures as a tool to implicitly elicit peoples’ touristic preferences. We create an easy-to-understand profile of someone's travel preferences by analyzing the pictures they upload. You can try out PicTouRe at [https://pictoprof.ec.tuwien.ac.at](https://pictoprof.ec.tuwien.ac.at/) and watch a demo video at [https://youtu.be/xZnXLPcenEs](https://youtu.be/xZnXLPcenEs). You can find more details under [https://doi.org/10.1145/3383313.3411526](https://doi.org/10.1145/3383313.3411526). 

Please cite our work as:
```
@inproceedings{sertkan2020_pictoure,
	title        = {PicTouRe - A Picture-Based Tourism Recommender},
	author       = {Sertkan, Mete and Neidhardt, Julia and Werthner, Hannes},
	year         = 2020,
	booktitle    = {Proceedings of the 14th ACM Conference on Recommender Systems},
	location     = {Virtual Event, Brazil},
	publisher    = {Association for Computing Machinery},
	address      = {New York, NY, USA},
	series       = {RecSys '20},
	pages        = {597–599},
	doi          = {10.1145/3383313.3411526},
	isbn         = 9781450375832,
	url          = {https://doi.org/10.1145/3383313.3411526},
	numpages     = 3,
	keywords     = {travel-behaviour, picture-based, preference elicitation, tourism, tourist}
}
```

We've also conducted a study with 81 participants to test how well our tool works, and found that it can accurately determine someone's travel preferences from a collection of pictures. If you want to learn more, check out our study at [https://arxiv.org/pdf/2006.05172.pdf](https://arxiv.org/pdf/2006.05172.pdf). 

Please cite our work as:
```
@inproceedings{sertkan2020_elicit,
	title        = {Eliciting Touristic Profiles: A User Study on Picture Collections},
	author       = {Sertkan, Mete and Neidhardt, Julia and Werthner, Hannes},
	year         = 2020,
	booktitle    = {Proceedings of the 28th ACM Conference on User Modeling, Adaptation and Personalization},
	location     = {Genoa, Italy},
	publisher    = {Association for Computing Machinery},
	address      = {New York, NY, USA},
	series       = {UMAP '20},
	pages        = {230–238},
	doi          = {10.1145/3340631.3394868},
	isbn         = 9781450368612,
	url          = {https://doi.org/10.1145/3340631.3394868},
	numpages     = 9,
	keywords     = {picture-based, travel-behaviour, preference elicitation, tourist, tourism}
}
```

# Backend
First go to the backend folder ``cd backend``. 
We recommend to create a fresh conda environment with the required packages using the provided environment.yml and subsequently activate the newly created environment as following
```
conda env create -n pic2prof --file environment.yml
conda activate pic2prof
```
Download the weights of the prediction models from here [https://owncloud.tuwien.ac.at/index.php/s/kotvEsald31Pw51](https://owncloud.tuwien.ac.at/index.php/s/kotvEsald31Pw51). Create a models folder under backend, i.e., ``mkdir models``,  and copy the downloaded ``*.pth`` files into this directory. 

Start the flask app as follwing
```
FLASK_APP=main.py flask run --host=0.0.0.0
```

# Frontend
Change to the frontend folder, e.g. ``cd ../frontend``if you are currently in the backend folder. 
To setup and run the frontend you need node.js, so follow the instruction at [https://nodejs.org/en/](https://nodejs.org/en/).
Now install the needed packages as following (this might take a while):
```
npm install
```
Download images of the recommendation items (in this case pictures of the destinations) from here [https://owncloud.tuwien.ac.at/index.php/s/h70PGy8EkqtQKxs](https://owncloud.tuwien.ac.at/index.php/s/h70PGy8EkqtQKxs). Create a pics folder under public, i.e., ``mkdir public/pics``. Copy the content of the downloaded ``*.zip`` into the newly created pics directory. You should now have following structure ``public/pics/destination_id/pic_id.jpg``. 

Compile and run the frontend as following
```
npm run serve
```

PicTouRe is now running under [http://localhost:8080/](http://localhost:8080/) :raised_hands: 