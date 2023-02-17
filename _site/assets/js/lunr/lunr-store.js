var store = [{
        "title": "sample_pages",
        "excerpt":" ","categories": ["python","basic"],
        "tags": ["python"],
        "url": "/python/basic/sample_page/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "Sample_page",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/sample_page/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "[Python] logging을 활용한 시스템 로그 출력",
        "excerpt":"Introduction  오늘은 디버깅시 유용하게 사용할 수 있는 logging 모듈에 대해 알아봅니다   What is logging?   로깅이란 소프트웨어가 실행될 때 발생하는 이벤트를 추적하는 수단으로, 특정 이벤트가 발생했음을 나타내기 위해 코드에 로깅 호출을 추가할 수 있으며, 이벤트는 가변 데이터 (이벤트마다 잠재적으로 다른 데이터)가 포함될 수 있는 메세지를 출력한다.   Log levels                  level       description                       DEBUG       프로그램 동작에 대한 상세 정보, 문제를 진단할때만 필요                 INFO       예상대로 작동하는 지에 대한 Tracking 목적                 WARNING       예상치 못한 일이 발생했거나 가까운 미래에 발생할 문제 (e.g, 디스크 공간 부족) 등에 대한 표시  SW는 정상 작동                 ERROR       소프트웨어가 일부 기능을 수행하지 못할 정도의 에러                 CRITICAL       매우 심각한 에러, 프로그램 자체가 실행되지 않을 수 있음           Basic usage   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 import logging  # create logger logger = logging.getLogger()  # 로그 출력 level 설정 logger.setLevel(logging.INFO)  # log 출력 formmat 설정 formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')  # log 출력 stream_handler = logging.StreamHandler() stream_handler.setFormatter(formatter) logger.addHandler(stream_handler)  # log를 파일에 출력 file_handler = logging.FileHandler('my.log') file_handler.setFormatter(formatter) logger.addHandler(file_handler)       logging.getLogger(): 로거 생성            아무 파라미터를 입력하지 않을 시 root logger로 생성       이름 지정 시 해당 이름으로 logger 생성       임의의 이름으로 생성된 logger는 모두 root logger의 자손이 됨           General use in AI projects   1 2 3 4 5 6 7 8 &gt;&gt; utils.py  import logging  def get_logger(name):     pass  # update later   ","categories": ["python","basic"],
        "tags": ["basic","logging","module"],
        "url": "/python/basic/logging_module/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "Logging_module",
        "excerpt":"Introduction  오늘은 디버깅시 유용하게 사용할 수 있는 logging 모듈에 대해 알아봅니다   What is logging?   로깅이란 소프트웨어가 실행될 때 발생하는 이벤트를 추적하는 수단으로, 특정 이벤트가 발생했음을 나타내기 위해 코드에 로깅 호출을 추가할 수 있으며, 이벤트는 가변 데이터 (이벤트마다 잠재적으로 다른 데이터)가 포함될 수 있는 메세지를 출력한다.   Log levels                  level       description                       DEBUG       프로그램 동작에 대한 상세 정보, 문제를 진단할때만 필요                 INFO       예상대로 작동하는 지에 대한 Tracking 목적                 WARNING       예상치 못한 일이 발생했거나 가까운 미래에 발생할 문제 (e.g, 디스크 공간 부족) 등에 대한 표시  SW는 정상 작동                 ERROR       소프트웨어가 일부 기능을 수행하지 못할 정도의 에러                 CRITICAL       매우 심각한 에러, 프로그램 자체가 실행되지 않을 수 있음           Basic usage   import logging  # create logger logger = logging.getLogger()  # 로그 출력 level 설정 logger.setLevel(logging.INFO)  # log 출력 formmat 설정 formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')  # log 출력 stream_handler = logging.StreamHandler() stream_handler.setFormatter(formatter) logger.addHandler(stream_handler)  # log를 파일에 출력 file_handler = logging.FileHandler('my.log') file_handler.setFormatter(formatter) logger.addHandler(file_handler)       logging.getLogger(): 로거 생성            아무 파라미터를 입력하지 않을 시 root logger로 생성       이름 지정 시 해당 이름으로 logger 생성       임의의 이름으로 생성된 logger는 모두 root logger의 자손이 됨           General use in AI projects   &gt;&gt; utils.py  import logging  def get_logger(name):     pass  # update later   ","categories": [],
        "tags": [],
        "url": "/logging_module/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "ml-dl samples",
        "excerpt":" ","categories": ["ml-dl","pytorch"],
        "tags": ["torchvision","torch"],
        "url": "/ml-dl/pytorch/torch/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "Test_page",
        "excerpt":" ","categories": ["ml-dl","pytorch"],
        "tags": ["python"],
        "url": "/ml-dl/pytorch/test_page/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "Test_page",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/test_page/",
        "teaser": "/assets/images/main-teaser.jpeg"
      },{
        "title": "Algorithm samples",
        "excerpt":"헤헤  ","categories": ["algorithm","programmers"],
        "tags": ["bfs","dfs"],
        "url": "/algorithm/programmers/algorithm_test/",
        "teaser": "/assets/images/main-teaser.jpeg"
      }]
