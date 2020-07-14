from flask import Flask, send_from_directory, render_template, request
import json

app = Flask(__name__)


@app.route('/js/<path:path>')
def send_js(path):
    print(path)
    return send_from_directory('static/js', path)


@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('static/css', path)


@app.route('/')
def serve_home():
    return render_template('index.html')


my_list = []


@app.route('/api/post', methods=['POST'])
def get_instruments():
    new_instrument = request.json
    if 'quantity' not in new_instrument:
        return json.dumps({"added": 'false'})
    else:
        my_list.append(new_instrument)
        print(my_list)
        return json.dumps({"added": 'true'})


if __name__ == "__main__":
    app.run()