FROM cypress/included:latest

WORKDIR /home/cypress/

RUN apt-get update

COPY . /home/cypress/

VOLUME [ "home/cypress/mochawesome-report" ]

RUN npm install

# CMD para executar os testes
CMD ["npm", "run", "test"]

# ENTRYPOINT para gerar o relatório separadamente
ENTRYPOINT ["npm", "run", "cy:report"]
