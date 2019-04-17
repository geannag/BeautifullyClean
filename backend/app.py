# from flask import Flask, abort, jsonify
# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'


# questions = {
#     '1': {
#         # 'id': 1,
#         'question': u'Foo?'
#     },
#     '2': {
#         # 'id': 2,
#         'question': u'Bar'
#     }
# }


# @app.route('/questions/<q_id>', methods=['GET'])
# def get_questions(q_id):
#     if len(questions) == 0:
#         abort(404)
#     if (q_id not in questions):
#         abort(404)
#     question = questions.get(q_id).get('question')
#     return jsonify(question)