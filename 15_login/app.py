from flask import Flask, request, render_template, redirect, url_for, session, flash
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
admin_user = "vsco"
admin_pw = "girls"
@app.route('/')
def index():
    if 'user' in session:
       return redirect(url_for('welcome'))
    else:
        return render_template("form.html")

@app.route('/welcome')
def welcome():
    return render_template("welcome.html")


@app.route('/auth', methods=['get'])
def checklogin():
    username = request.args['username']
    password = request.args['password']
    if username == admin_user and password == admin_pw:
        session['user'] = username
    return redirect(url_for('index'))

@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('user', None)
    return redirect(url_for('index'))
if __name__ == "__main__":
    app.debug = True
    app.run()