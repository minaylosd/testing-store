<template>
    <div>
        <label v-if="!file" for="fileInput" class="block mb-1 text-sm font-normal font-compact text-greytxt">JPG, JPEG, PNG, GIF, MP3, WAV, OGG, MP4, AVI</label>
        <div :class="[
            'flex flex-col items-center justify-center w-full mx-auto border-divider/50 bg-tertiary border cursor-pointer rounded-2xl',
            file ? 'border-solid p-1.5' : 'border-dashed px-4 py-3',
        ]" @dragover.prevent @drop.prevent="handleDrop" @click="fileInputClick">
            <input type="file" id="fileInput" ref="fileInput" class="hidden" @change="handleFileUpload" />
            <div class="w-full space-y-2">
                <div v-if="file" class="flex items-center gap-3">
                    <div>
                        <img v-if="isImage" :src="previewUrl" alt="Preview"
                            class="object-cover w-16 h-12 rounded-lg" />

                        <div v-else class="w-11 h-11">
                            <FileIcon :type="getFileExtension(file.name)" />
                        </div>
                    </div>


                    <div class="flex justify-between w-full">
                        <div>
                            <p class="text-sm text-txt font-compact">
                                {{ getFileNameWithoutExtension(file.name) }}
                            </p>

                            <p class="flex gap-1 text-sm uppercase text-greytxt font-compact">
                                <span>
                                    {{ getFileExtension(file.name) }}
                                </span>

                                <span>•</span>

                                <span>
                                    {{ formatFileSize(file.size) }}
                                </span>
                            </p>
                        </div>

                        <button @click.stop="clearFile">
                            <img src="/icons/delete_grey.svg" alt="" />
                        </button>
                    </div>
                </div>
                <p v-else class="font-normal w-full leading-5 font-compact text-[#0070e5] text-17">
                    Прикрепить файл
                </p>
            </div>
        </div>
        <p v-if="!file" class="block mt-1 text-xs font-normal font-compact text-greytxt">
            Аудио и видео форматы длительностью до 1 минуты и весом не более 50мб. Для изображений вес до 5 МБ и разрешением 16000x16000
        </p>
        <p v-if="fileInvalid" class="block text-xs font-normal font-compact text-[#d8400c]">
            Вес файла превышен
        </p>
    </div>

</template>

<script setup>
import { ref, computed } from "vue";
import FileIcon from "@/components/icons/FileIcon.vue";

const fileInput = ref(null);
const file = ref(null);
const previewUrl = ref(null);
const fileInvalid = ref(false);

const emit = defineEmits(["file-upload", "file-remove"]);

const isImage = computed(() => {
    return file.value && file.value.type.startsWith("image/");
});

function fileInputClick() {
    fileInput.value.click();
}

function handleFileUpload(event) {
    const files = event.target?.files;
    if (!files || !files[0]) return;
    validateFile(files[0]);
}

function handleDrop(event) {
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        validateFile(event.dataTransfer.files[0]);
    }
}

function validateFile(selectedFile) {
    fileInvalid.value = false;
    if (selectedFile.type.startsWith("image/")) {
        if (selectedFile.size > 5 * 1024 * 1024) {
            fileInvalid.value = true;
            return;
        }
        const img = new Image();
        img.src = URL.createObjectURL(selectedFile);
        img.onload = () => {
            if (img.width > 16000 || img.height > 16000) {
                fileInvalid.value = true;
            } else {
                setFile(selectedFile);
            }
        };
    } else if (selectedFile.type.startsWith("audio/") || selectedFile.type.startsWith("video/")) {
        if (selectedFile.size > 50 * 1024 * 1024) {
            fileInvalid.value = true;
            return;
        }
        const media = document.createElement(selectedFile.type.startsWith("audio/") ? "audio" : "video");
        media.src = URL.createObjectURL(selectedFile);
        media.onloadedmetadata = () => {
            if (media.duration > 60) {
                fileInvalid.value = true;
            } else {
                setFile(selectedFile);
            }
        };
    } else {
        setFile(selectedFile);
    }
}

function setFile(selectedFile) {
    file.value = selectedFile;
    updatePreview();
    emit("file-upload", file.value);
}

function clearFile() {
    file.value = null;
    previewUrl.value = null;
    fileInput.value.value = "";
    emit("file-remove");
}

function updatePreview() {
    if (file.value && file.value.type.startsWith("image/")) {
        previewUrl.value = URL.createObjectURL(file.value);
    } else {
        previewUrl.value = null;
    }
}

function getFileNameWithoutExtension(fileName) {
    return fileName.replace(/\.[^/.]+$/, "");
}

function getFileExtension(fileName) {
    const extensionMatch = fileName.match(/\.(\w+)$/);
    return extensionMatch ? extensionMatch[1] : "";
}

function formatFileSize(size) {
    if (size < 1024) return `${size} B`;
    else if (size < 1048576) return `${(size / 1024).toFixed(1)} KB`;
    else return `${(size / 1048576).toFixed(1)} MB`;
}
</script>
