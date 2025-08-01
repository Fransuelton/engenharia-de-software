# Usar imagem base Ubuntu com JDK 21
FROM ubuntu:22.04

# Variáveis de ambiente
ENV CATALINA_HOME=/opt/tomcat
ENV GLASSFISH_HOME=/opt/glassfish
ENV JAVA_HOME=/usr/lib/jvm/java-21-openjdk-arm64

# Instalar OpenJDK 21 e utilitários, baixar Tomcat e GlassFish
RUN apt-get update && \
    apt-get install -y openjdk-21-jdk wget unzip curl nano && \
    # Baixar e instalar Tomcat 10.1.30 (versão LTS estável)
    curl --silent --fail -L https://archive.apache.org/dist/tomcat/tomcat-10/v10.1.30/bin/apache-tomcat-10.1.30.tar.gz -o /tmp/apache-tomcat.tar.gz && \
    tar -xzf /tmp/apache-tomcat.tar.gz -C /opt && \
    mv /opt/apache-tomcat-10.1.30 $CATALINA_HOME && \
    rm /tmp/apache-tomcat.tar.gz && \
    # Baixar e instalar GlassFish 7.0.15 (versão estável)
    curl --silent --fail -L https://github.com/eclipse-ee4j/glassfish/releases/download/7.0.15/glassfish-7.0.15.zip -o /tmp/glassfish.zip && \
    unzip /tmp/glassfish.zip -d /opt && \
    mv /opt/glassfish7 $GLASSFISH_HOME && \
    rm /tmp/glassfish.zip && \
    # Limpar cache do apt para reduzir imagem
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Expor portas do Tomcat (8080) e GlassFish (4848, 8080)
EXPOSE 8080 4848 8080

# Diretório de trabalho
WORKDIR /opt/workspace

# Iniciar com bash para facilitar uso
CMD ["bash"]
