from flask import Flask,render_template
app=Flask(__name__)
print("Hello world")
@app.route('/')
# def sum(a,b):
#     return a+b
# def sub(a,b):
#     return a-b
# def multi(a,b):
#     return a*b
# def div(a,b):
#     return a/b
def hello_world():
    return render_template('index.html')
app.run(debug=True)
