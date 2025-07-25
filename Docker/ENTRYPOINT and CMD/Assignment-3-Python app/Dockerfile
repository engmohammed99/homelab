FROM python:slim

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Create a volume for persistent data
VOLUME [ "/app/data" ]

#Entry point to start the script
ENTRYPOINT [ "./docker-entrypoint.sh" ]

# Cmd to run the uvicorn server
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000" ]
