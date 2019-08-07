{
    "apps": [
        {
            "/**/ ": "mjpeg",
            "name": "streamer",
            "script": "mjpg_streamer",
            "exec_mode": "fork_mode",
            "args": [
                "-i",
                "input_uvc.so -d /dev/video0 -n -f 15 -r 1280x720",
                "-o",
                "output_http.so -w /usr/share/mjpg_streamer/www  -p 8080"
            ],
            "log_date_format": "YYYY-MM-DD HH:mm:ss"
        }
    ]
}
