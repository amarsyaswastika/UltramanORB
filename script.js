import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Skenario: Naikkan traffic ke 20 user dalam 30 detik, tahan 1 menit, lalu turun.
  stages: [
    { duration: '30s', target: 0 },
    { duration: '1m', target: 0 },  
    { duration: '10s', target: 0 },  
  ],
  cloud: {
    // Nama Project di Grafana Cloud Anda
    projectID: 6377685, // Ganti dengan Project ID dari Grafana Cloud Anda
    name: 'Test GitHub Pages Saya',
  },
};

export default function () {
  // Ganti dengan URL GitHub Pages Anda
  http.get('https://ultramanorb.my.id/');
  sleep(1);
}
