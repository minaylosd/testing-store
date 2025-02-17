<template>
    <div>
        <label v-if="!file" for="fileInput" class="block mb-1 text-sm font-normal font-compact text-greytxt">Формат файла: JPG, GIF, MP3, MP4</label>
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
                    Прикрепите файл
                </p>
            </div>
        </div>
        <p v-if="!file" class="block mt-1 text-sm font-normal font-compact text-greytxt">
            GIF, MP3, MP4 длительностью до 1 минуты и весом не более 50мб. Для изображений вес до 5 МБ и разрешением
            16000x16000
        </p>
    </div>

</template>

<script setup>
import { ref, computed } from "vue";
import FileIcon from "@/components/icons/FileIcon.vue";

const fileInput = ref(null);
const file = ref(null);
const previewUrl = ref(null);

const props = defineProps({
    id: Number,
});

const emit = defineEmits(["file-upload", "file-remove"]);

const isImage = computed(() => {
    return file.value && file.value.type.startsWith("image/");
});

function fileInputClick() {
    fileInput.value.click();
}

function handleFileUpload(event) {
    if (event.target.files && event.target.files[0]) {
        file.value = event.target.files[0];
        updatePreview();
        emit("file-upload", file.value, props.id);
    }
}

function handleDrop(event) {
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        file.value = event.dataTransfer.files[0];
        updatePreview();
        emit("file-upload", file.value, props.id);
    }
}

function clearFile() {
    file.value = null;
    previewUrl.value = null;
    fileInput.value.value = "";
    emit("file-remove", props.id);
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
