from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from questions.models import Question
from questions.serializers import QuestionSerializer

@csrf_exempt
def question_list(request):
    """
    List all questions or create a new question
    """
    if request.method == 'GET':
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return JsonResponse({ "questions": serializer.data }, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = QuestionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)