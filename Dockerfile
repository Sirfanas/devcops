FROM road-to-namib

RUN git clone https://github.com/Sirfanas/devcops.git /opt/devcops\
	&& cd /opt/devcops \
	&& echo "APP_ENV=dev" > /opt/devcops/.env\
	&& echo "APP_SECRET=1737c29d4453abb9c6ba7b0ec29e5d94" >> /opt/devcops/.env \
	&& echo "DATABASE_URL=mysql://root:root@localhost:3306/devCopsDb" >> /opt/devcops/.env \
	&& echo "MAILER_URL=null://localhost" >> /opt/devcops/.env \
	&& composer require symfony/requirements-checker \
	&& composer require symfony/apache-pack \
	&& composer install \
	&& /opt/start_service_road_to_namib.sh \
	&& mysql -e "CREATE DATABASE devCopsDb;" \
	&& bin/console doctrine:schema:update --force

EXPOSE 80

ENTRYPOINT ["/opt/start_service_road_to_namib.sh"]

CMD ["/bin/bash"]
