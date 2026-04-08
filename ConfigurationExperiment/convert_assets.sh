#!/usr/bin/env bash
# Converts all JPG/PNG images to WebP and all WAV files to MP3
# in ConfigurationExperiment/biology-textbook/public/assets
# Original files are left in place.

set -euo pipefail

ASSETS_DIR="$(dirname "$0")/biology-textbook/public/assets"

echo "=== Converting images (JPG/PNG → WebP) ==="
find "$ASSETS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
  -not -path "*/powerpoint/*" -not -path "*/Powerpoints/*" | while read -r img; do
  out="${img%.*}.webp"
  if [[ ! -f "$out" ]]; then
    cwebp -quiet -q 80 "$img" -o "$out"
    echo "  converted: $(basename "$img") → $(basename "$out")"
  else
    echo "  skipped (exists): $(basename "$out")"
  fi
done

echo ""
echo "=== Converting audio (WAV → MP3) ==="
find "$ASSETS_DIR" -type f -iname "*.wav" \
  -not -path "*/powerpoint/*" -not -path "*/Powerpoints/*" | while read -r wav; do
  out="${wav%.*}.mp3"
  if [[ ! -f "$out" ]]; then
    ffmpeg -loglevel error -i "$wav" -q:a 4 "$out"
    echo "  converted: $(basename "$wav") → $(basename "$out")"
  else
    echo "  skipped (exists): $(basename "$out")"
  fi
done

echo ""
echo "=== Done ==="
