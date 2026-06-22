from flask import Flask,request,redirect,jsonify
import random,string


app=Flask(__name__)


urls={}



@app.route("/shorten",methods=["POST"])

def shorten():

    data=request.json

    code=''.join(
        random.choice(
        string.ascii_letters)
        for i in range(6)
    )


    urls[code]=data["url"]


    return jsonify({

    "short_url":
    "http://localhost:5000/"+code

    })



@app.route("/<code>")

def redirect_url(code):

    return redirect(
        urls[code]
    )



app.run()